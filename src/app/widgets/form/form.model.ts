import { FormConfig } from '../../models';


export interface IFormModelDataChoices {
  name: string;
  value: any;
}

export class FormModel {

    // Model input data
    private data: any;

    // Model input definition
    private types: any;

    // Model input order
    private order: Array<string>;

    constructor() {
        this.data = {};
        this.types = {};
        this.order = [];
    }

    /**
     * Add new input definition to model.
     */
    addInput(name: string, value: any, options: any): boolean {
        this.data[name] = value;
        this.types[name] = options;
        this.order.push(name);
        return true;
    }

    /**
     * Retrieve model's input names.
     */
    getInputs(): Array<string> {
        return this.order;
    }

    /**
     * Retrieve validator definition corresponding specified input name.
     */
    getInputValidators(input: string): Array<any> {
        return this.types[input].validators || [];
    }

    /**
     * Retrieve group validator definition corresponding specified input name.
     */
    getInputGroupValidators(input: string): Array<any> {
        return this.types[input].groupvalidators || [];
    }

    /**
     * Retrieve validator definition corresponding specified input name.
     */
    getInputData(input: string): any {
        return this.data[input];
    }

    /**
     * Return boolean indicating whether model input type is checkbox or not.
     */
    isCheckbox(input: string): boolean {
        return this.types[input].type === 'checkbox';
    }

    /**
     * Return model input's data. Use only when data for the input is array.
     */
    getInputDataChoices(input: string): Array<IFormModelDataChoices> {
        const data = [];

        if (this.types[input].selector) {
            const ref = this.types[input].selector.displayRef;
            this.types[input].selector.list.forEach(item => {
                const dataChoice = <IFormModelDataChoices> {
                    name: ref ? item[ref] : item,
                    value: false
                };

                const inputData = this.getInputData(input);
                for (let i = 0; i < inputData.length; i++) {
                    const refItem = ref ? inputData[i][ref] : inputData[i];
                    if (refItem === dataChoice.name) {
                        dataChoice.value = inputData[i].value;
                        break;
                    }
                }
                data.push(dataChoice);
            });
        }

        return data;
    }

    /**
     * Retrieve options for each model input.
     */
    getOptions(): Array<any> {
        const result = [];
        this.order.forEach(ref => {
            const opt = {errorkeys: [], ref: ref, ...this.types[ref]};

            // Form level errors that this input should be tracking
            this.getInputGroupValidators(ref).forEach(config => {
                opt.errorkeys.push(config.name);
            });

            result.push(opt);
        });

        return result;
    }

    /**
     * Add model input data based on model's configuration data.
     *
     * @param configuration {string} Model's input configuration.
     */
    addInputs(configuration: Array<FormConfig>): void {
        for (const item of configuration) {
            for (const key in item) {
                if (key) {
                    this.addInput(key, '', item[key]);
                }
            }
        }
    }
}
