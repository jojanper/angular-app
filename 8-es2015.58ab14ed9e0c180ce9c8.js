(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{royy:function(n,l,e){"use strict";e.r(l);var a=e("8Y7J"),t=e("MggM"),i=e("o0su"),u=e("cp0P"),o=e("5+tZ"),r=e("lJxs");const s="https://swapi.co/api/planets/",m="https://swapi.co/api/species/";class c extends t.d{}class b extends t.d{}class d extends t.d{}class v{constructor(n){this.network=n,this.connectionOptions=new i.d,this.connectionOptions.cors=!0,this.planets=new c,this.species=new b,this.appPlanets=new d(t.e.PERSISTENT),this.fetch(s,"planets"),this.fetch(m,"species"),Object(u.a)([this.getPlanets(),this.getSpieces()]).subscribe(n=>{this.appPlanets.addSubjects(this.joinPlanetsSpecies(n[0],n[1]))})}joinPlanetsSpecies(n,l){return n.map(n=>{const e=n;return e.species=[],l.forEach(l=>{if(n.url===l.homeworld){const n=l.url.split("/"),a=l;l.id=n[n.length-2],e.species.push(a)}}),e})}fetch(n,l){this.network.get(n,this.connectionOptions).subscribe(n=>{const e=n;this[l].push(e.results),e.next?this.fetch(e.next,l):(this[l].next(),this[l].complete())})}getPlanets(){return this.planets.observable}getSpieces(){return this.species.observable}getData(){return this.appPlanets.observable}getSpeciesDetail(n){return this.network.get(m+n+"/",this.connectionOptions).pipe(Object(o.a)(n=>{const l=n;return this.network.get(l.homeworld,this.connectionOptions).pipe(Object(r.a)(n=>(l.planet=n,l)))}))}}var p=e("4xkn");class h{constructor(n,l,e,a){this.api=n,this.resolver=l,this.injector=e,this.routerService=a}ngOnInit(){this.renderPlanetsFn=this.renderPlanets.bind(this),this.observable=this.api.getData()}renderPlanets(n){return this[`${n.target}Render`](n.row)}speciesRender(n){const l=n.species.map(n=>({link:[this.routerService.resolveByName("starwars.species-view"),n.id],text:n.name}));return Object(p.d)(this.resolver,this.injector,p.c,l)}}var g=e("LRne"),N=e("JIr8");class f{constructor(n,l){this.api=n,this.route=l,this.speciesDetails=this.api.getSpeciesDetail(this.route.snapshot.params.id).pipe(Object(N.a)(()=>Object(g.a)({})))}}const k={url:"star-wars",name:"starwars-view",menuTitle:"Star Wars",children:[{url:"planets",name:"starwars.planets-view",menuTitle:"Planets"},{url:"species",name:"starwars.species-view",menuTitle:"Species",children:[{url:":id",name:"starwars.species-detail-view",menuTitle:"Species details",sidemenu:!1}]}]},w=k.children,y={config:{route:w[0]}},q={config:{route:w[1]}},S={config:{route:w[1].children[0]}},I={config:{route:k}},D={url:"world-bank",name:"worldbank-view",menuTitle:"World Bank",children:[{url:"countries",name:"worldbank.countries-view",menuTitle:"Countries and Economies"},{url:"GDP",name:"worldbank.gdp-view",menuTitle:"GDP"}]},O="https://api.worldbank.org/v2/";class j{constructor(n){this.network=n,this.connectionOptions=new i.d,this.connectionOptions.cors=!0}getData(n,l,e,a){const t={};n&&(t.page=Math.floor(e.start/e.length)+1,t.per_page=e.length),this.connectionOptions.params=Object.assign({},t,{format:"json"}),this.network.get(`${O}${l}`,this.connectionOptions).subscribe(l=>{const t={data:l[1]};n&&(t.draw=e.draw,t.recordsTotal=l[0].total,t.recordsFiltered=l[0].total),a(t)})}}class T{constructor(n){this.api=n,this.tableOptions={ajax:(n,l)=>{this.ajax(n,l)}}}ajax(n,l){this.api.getData(!0,"countries",n,l)}}class C extends T{constructor(n){super(n)}}const x=D.children,z={config:{route:x[0]}},A={config:{route:x[1]}},F={config:{route:D}};var P=e("7AKq");const J="https://api.themoviedb.org/3/movie/",H="c412c072676d278f83c9198a32613b0d";class K{constructor(n){this.network=n,this.connectionOptions=new i.d,this.connectionOptions.cors=!0}getMovies(n,l="top_rated"){return this.network.get(`${J}${l}?api_key=${H}&page=${n}&language=en-US`,this.connectionOptions)}}K.ngInjectableDef=a.Lb({factory:function(){return new K(a.Pb(P.b))},token:K,providedIn:"root"});class M extends t.b{constructor(n){super(),this.movieService=n}getData(n,l){this.movieService.getMovies(n).subscribe(e=>{const a=e;l&&this.setInitialData(a.results.length,a.total_results),this.setData(a.results,n)})}}class E{constructor(n){this.movieService=n,this.ds=new M(this.movieService)}}const B={aa:{name:"Afar",nativeName:"Afaraf"},ab:{name:"Abkhaz",nativeName:"\u0430\u04a7\u0441\u0443\u0430 \u0431\u044b\u0437\u0448\u04d9\u0430"},ae:{name:"Avestan",nativeName:"avesta"},af:{name:"Afrikaans",nativeName:"Afrikaans"},ak:{name:"Akan",nativeName:"Akan"},am:{name:"Amharic",nativeName:"\u12a0\u121b\u122d\u129b"},an:{name:"Aragonese",nativeName:"aragon\xe9s"},ar:{name:"Arabic",nativeName:"\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629"},as:{name:"Assamese",nativeName:"\u0985\u09b8\u09ae\u09c0\u09af\u09bc\u09be"},av:{name:"Avaric",nativeName:"\u0430\u0432\u0430\u0440 \u043c\u0430\u0446\u04c0"},ay:{name:"Aymara",nativeName:"aymar aru"},az:{name:"Azerbaijani",nativeName:"az\u0259rbaycan dili"},ba:{name:"Bashkir",nativeName:"\u0431\u0430\u0448\u04a1\u043e\u0440\u0442 \u0442\u0435\u043b\u0435"},be:{name:"Belarusian",nativeName:"\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f \u043c\u043e\u0432\u0430"},bg:{name:"Bulgarian",nativeName:"\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a"},bh:{name:"Bihari",nativeName:"\u092d\u094b\u091c\u092a\u0941\u0930\u0940"},bi:{name:"Bislama",nativeName:"Bislama"},bm:{name:"Bambara",nativeName:"bamanankan"},bn:{name:"Bengali",nativeName:"\u09ac\u09be\u0982\u09b2\u09be"},bo:{name:"Tibetan Standard",nativeName:"\u0f56\u0f7c\u0f51\u0f0b\u0f61\u0f72\u0f42"},br:{name:"Breton",nativeName:"brezhoneg"},bs:{name:"Bosnian",nativeName:"bosanski jezik"},ca:{name:"Catalan",nativeName:"catal\xe0"},ce:{name:"Chechen",nativeName:"\u043d\u043e\u0445\u0447\u0438\u0439\u043d \u043c\u043e\u0442\u0442"},ch:{name:"Chamorro",nativeName:"Chamoru"},cn:{name:"Chinese",nativeName:"\u4e2d\u6587"},co:{name:"Corsican",nativeName:"corsu"},cr:{name:"Cree",nativeName:"\u14c0\u1426\u1403\u152d\u140d\u140f\u1423"},cs:{name:"Czech",nativeName:"\u010de\u0161tina"},cu:{name:"Old Church Slavonic",nativeName:"\u0469\u0437\u044b\u043a\u044a \u0441\u043b\u043e\u0432\u0463\u043d\u044c\u0441\u043a\u044a"},cv:{name:"Chuvash",nativeName:"\u0447\u04d1\u0432\u0430\u0448 \u0447\u04d7\u043b\u0445\u0438"},cy:{name:"Welsh",nativeName:"Cymraeg"},da:{name:"Danish",nativeName:"dansk"},de:{name:"German",nativeName:"Deutsch"},dv:{name:"Divehi",nativeName:"Dhivehi"},dz:{name:"Dzongkha",nativeName:"\u0f62\u0fab\u0f7c\u0f44\u0f0b\u0f41"},ee:{name:"Ewe",nativeName:"E\u028begbe"},el:{name:"Greek",nativeName:"\u03b5\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac"},en:{name:"English",nativeName:"English"},eo:{name:"Esperanto",nativeName:"Esperanto"},es:{name:"Spanish",nativeName:"Espa\xf1ol"},et:{name:"Estonian",nativeName:"eesti"},eu:{name:"Basque",nativeName:"euskara"},fa:{name:"Persian",nativeName:"\u0641\u0627\u0631\u0633\u06cc"},ff:{name:"Fula",nativeName:"Fulfulde"},fi:{name:"Finnish",nativeName:"suomi"},fj:{name:"Fijian",nativeName:"Vakaviti"},fo:{name:"Faroese",nativeName:"f\xf8royskt"},fr:{name:"French",nativeName:"Fran\xe7ais"},fy:{name:"Western Frisian",nativeName:"Frysk"},ga:{name:"Irish",nativeName:"Gaeilge"},gd:{name:"Scottish Gaelic",nativeName:"G\xe0idhlig"},gl:{name:"Galician",nativeName:"galego"},gn:{name:"Guaran\xed",nativeName:"Ava\xf1e'\u1ebd"},gu:{name:"Gujarati",nativeName:"\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0"},gv:{name:"Manx",nativeName:"Gaelg"},ha:{name:"Hausa",nativeName:"\u0647\u064e\u0648\u064f\u0633\u064e"},he:{name:"Hebrew",nativeName:"\u05e2\u05d1\u05e8\u05d9\u05ea"},hi:{name:"Hindi",nativeName:"\u0939\u093f\u0928\u094d\u0926\u0940"},ho:{name:"Hiri Motu",nativeName:"Hiri Motu"},hr:{name:"Croatian",nativeName:"hrvatski jezik"},ht:{name:"Haitian",nativeName:"Krey\xf2l ayisyen"},hu:{name:"Hungarian",nativeName:"magyar"},hy:{name:"Armenian",nativeName:"\u0540\u0561\u0575\u0565\u0580\u0565\u0576"},hz:{name:"Herero",nativeName:"Otjiherero"},ia:{name:"Interlingua",nativeName:"Interlingua"},id:{name:"Indonesian",nativeName:"Indonesian"},ie:{name:"Interlingue",nativeName:"Interlingue"},ig:{name:"Igbo",nativeName:"As\u1ee5s\u1ee5 Igbo"},ii:{name:"Nuosu",nativeName:"\ua188\ua320\ua4bf Nuosuhxop"},ik:{name:"Inupiaq",nativeName:"I\xf1upiaq"},io:{name:"Ido",nativeName:"Ido"},is:{name:"Icelandic",nativeName:"\xcdslenska"},it:{name:"Italian",nativeName:"Italiano"},iu:{name:"Inuktitut",nativeName:"\u1403\u14c4\u1483\u144e\u1450\u1466"},ja:{name:"Japanese",nativeName:"\u65e5\u672c\u8a9e"},jv:{name:"Javanese",nativeName:"basa Jawa"},ka:{name:"Georgian",nativeName:"\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8"},kg:{name:"Kongo",nativeName:"Kikongo"},ki:{name:"Kikuyu",nativeName:"G\u0129k\u0169y\u0169"},kj:{name:"Kwanyama",nativeName:"Kuanyama"},kk:{name:"Kazakh",nativeName:"\u049b\u0430\u0437\u0430\u049b \u0442\u0456\u043b\u0456"},kl:{name:"Kalaallisut",nativeName:"kalaallisut"},km:{name:"Khmer",nativeName:"\u1781\u17c1\u1798\u179a\u1797\u17b6\u179f\u17b6"},kn:{name:"Kannada",nativeName:"\u0c95\u0ca8\u0ccd\u0ca8\u0ca1"},ko:{name:"Korean",nativeName:"\ud55c\uad6d\uc5b4"},kr:{name:"Kanuri",nativeName:"Kanuri"},ks:{name:"Kashmiri",nativeName:"\u0915\u0936\u094d\u092e\u0940\u0930\u0940"},ku:{name:"Kurdish",nativeName:"Kurd\xee"},kv:{name:"Komi",nativeName:"\u043a\u043e\u043c\u0438 \u043a\u044b\u0432"},kw:{name:"Cornish",nativeName:"Kernewek"},ky:{name:"Kyrgyz",nativeName:"\u041a\u044b\u0440\u0433\u044b\u0437\u0447\u0430"},la:{name:"Latin",nativeName:"latine"},lb:{name:"Luxembourgish",nativeName:"L\xebtzebuergesch"},lg:{name:"Ganda",nativeName:"Luganda"},li:{name:"Limburgish",nativeName:"Limburgs"},ln:{name:"Lingala",nativeName:"Ling\xe1la"},lo:{name:"Lao",nativeName:"\u0e9e\u0eb2\u0eaa\u0eb2"},lt:{name:"Lithuanian",nativeName:"lietuvi\u0173 kalba"},lu:{name:"Luba-Katanga",nativeName:"Tshiluba"},lv:{name:"Latvian",nativeName:"latvie\u0161u valoda"},mg:{name:"Malagasy",nativeName:"fiteny malagasy"},mh:{name:"Marshallese",nativeName:"Kajin M\u0327aje\u013c"},mi:{name:"M\u0101ori",nativeName:"te reo M\u0101ori"},mk:{name:"Macedonian",nativeName:"\u043c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438 \u0458\u0430\u0437\u0438\u043a"},ml:{name:"Malayalam",nativeName:"\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02"},mn:{name:"Mongolian",nativeName:"\u041c\u043e\u043d\u0433\u043e\u043b \u0445\u044d\u043b"},mr:{name:"Marathi",nativeName:"\u092e\u0930\u093e\u0920\u0940"},ms:{name:"Malay",nativeName:"\u0647\u0627\u0633 \u0645\u0644\u0627\u064a\u0648\u200e"},mt:{name:"Maltese",nativeName:"Malti"},my:{name:"Burmese",nativeName:"\u1017\u1019\u102c\u1005\u102c"},na:{name:"Nauru",nativeName:"Ekakair\u0169 Naoero"},nb:{name:"Norwegian Bokm\xe5l",nativeName:"Norsk bokm\xe5l"},nd:{name:"Northern Ndebele",nativeName:"isiNdebele"},ne:{name:"Nepali",nativeName:"\u0928\u0947\u092a\u093e\u0932\u0940"},ng:{name:"Ndonga",nativeName:"Owambo"},nl:{name:"Dutch",nativeName:"Nederlands"},nn:{name:"Norwegian Nynorsk",nativeName:"Norsk nynorsk"},no:{name:"Norwegian",nativeName:"Norsk"},nr:{name:"Southern Ndebele",nativeName:"isiNdebele"},nv:{name:"Navajo",nativeName:"Din\xe9 bizaad"},ny:{name:"Chichewa",nativeName:"chiChe\u0175a"},oc:{name:"Occitan",nativeName:"occitan"},oj:{name:"Ojibwe",nativeName:"\u140a\u14c2\u1511\u14c8\u142f\u14a7\u140e\u14d0"},om:{name:"Oromo",nativeName:"Afaan Oromoo"},or:{name:"Oriya",nativeName:"\u0b13\u0b21\u0b3c\u0b3f\u0b06"},os:{name:"Ossetian",nativeName:"\u0438\u0440\u043e\u043d \xe6\u0432\u0437\u0430\u0433"},pa:{name:"Panjabi",nativeName:"\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40"},pi:{name:"P\u0101li",nativeName:"\u092a\u093e\u0934\u093f"},pl:{name:"Polish",nativeName:"j\u0119zyk polski"},ps:{name:"Pashto",nativeName:"\u067e\u069a\u062a\u0648"},pt:{name:"Portuguese",nativeName:"Portugu\xeas"},qu:{name:"Quechua",nativeName:"Runa Simi"},rm:{name:"Romansh",nativeName:"rumantsch grischun"},rn:{name:"Kirundi",nativeName:"Ikirundi"},ro:{name:"Romanian",nativeName:"limba rom\xe2n\u0103"},ru:{name:"Russian",nativeName:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"},rw:{name:"Kinyarwanda",nativeName:"Ikinyarwanda"},sa:{name:"Sanskrit",nativeName:"\u0938\u0902\u0938\u094d\u0915\u0943\u0924\u092e\u094d"},sc:{name:"Sardinian",nativeName:"sardu"},sd:{name:"Sindhi",nativeName:"\u0938\u093f\u0928\u094d\u0927\u0940"},se:{name:"Northern Sami",nativeName:"Davvis\xe1megiella"},sg:{name:"Sango",nativeName:"y\xe2ng\xe2 t\xee s\xe4ng\xf6"},si:{name:"Sinhala",nativeName:"\u0dc3\u0dd2\u0d82\u0dc4\u0dbd"},sk:{name:"Slovak",nativeName:"sloven\u010dina"},sl:{name:"Slovene",nativeName:"slovenski jezik"},sm:{name:"Samoan",nativeName:"gagana fa'a Samoa"},sn:{name:"Shona",nativeName:"chiShona"},so:{name:"Somali",nativeName:"Soomaaliga"},sq:{name:"Albanian",nativeName:"Shqip"},sr:{name:"Serbian",nativeName:"\u0441\u0440\u043f\u0441\u043a\u0438 \u0458\u0435\u0437\u0438\u043a"},ss:{name:"Swati",nativeName:"SiSwati"},st:{name:"Southern Sotho",nativeName:"Sesotho"},su:{name:"Sundanese",nativeName:"Basa Sunda"},sv:{name:"Swedish",nativeName:"svenska"},sw:{name:"Swahili",nativeName:"Kiswahili"},ta:{name:"Tamil",nativeName:"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd"},te:{name:"Telugu",nativeName:"\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"},tg:{name:"Tajik",nativeName:"\u0442\u043e\u04b7\u0438\u043a\u04e3"},th:{name:"Thai",nativeName:"\u0e44\u0e17\u0e22"},ti:{name:"Tigrinya",nativeName:"\u1275\u130d\u122d\u129b"},tk:{name:"Turkmen",nativeName:"T\xfcrkmen"},tl:{name:"Tagalog",nativeName:"Wikang Tagalog"},tn:{name:"Tswana",nativeName:"Setswana"},to:{name:"Tonga",nativeName:"faka Tonga"},tr:{name:"Turkish",nativeName:"T\xfcrk\xe7e"},ts:{name:"Tsonga",nativeName:"Xitsonga"},tt:{name:"Tatar",nativeName:"\u0442\u0430\u0442\u0430\u0440 \u0442\u0435\u043b\u0435"},tw:{name:"Twi",nativeName:"Twi"},ty:{name:"Tahitian",nativeName:"Reo Tahiti"},ug:{name:"Uyghur",nativeName:"\u0626\u06c7\u064a\u063a\u06c7\u0631\u0686\u06d5\u200e"},uk:{name:"Ukrainian",nativeName:"\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430"},ur:{name:"Urdu",nativeName:"\u0627\u0631\u062f\u0648"},uz:{name:"Uzbek",nativeName:"\u040e\u0437\u0431\u0435\u043a"},ve:{name:"Venda",nativeName:"Tshiven\u1e13a"},vi:{name:"Vietnamese",nativeName:"Ti\u1ebfng Vi\u1ec7t"},vo:{name:"Volap\xfck",nativeName:"Volap\xfck"},wa:{name:"Walloon",nativeName:"walon"},wo:{name:"Wolof",nativeName:"Wollof"},xh:{name:"Xhosa",nativeName:"isiXhosa"},yi:{name:"Yiddish",nativeName:"\u05d9\u05d9\u05b4\u05d3\u05d9\u05e9"},yo:{name:"Yoruba",nativeName:"Yor\xf9b\xe1"},za:{name:"Zhuang",nativeName:"Sa\u026f cue\u014b\u0185"},zh:{name:"Chinese",nativeName:"\u4e2d\u6587"},zu:{name:"Zulu",nativeName:"isiZulu"}},L="https://image.tmdb.org/t/p/w370_and_h556_bestv2/";class V{movieImagePath(n){return`${L}${n.poster_path}`}langToString(n){const l=n.original_language;return B[l]?B[l].name:l}}const _={url:"movie-db",name:"moviedb-view",menuTitle:"The Movies DB",children:[{url:"top-rated",name:"moviedb.top-rated-view",menuTitle:"Top rated"}]},G={config:{route:_.children[0]}},R={config:{route:_}};var $=e("3E0/"),W=e("DQLy"),Y=e("YMfE");const Z={SAVE:Object(Y.f)("[beers] Save")};class X{constructor(n){this.payload=n,this.type=Z.SAVE}}const Q={page:1,beers:[]};function U(n=Q,l){switch(l.type){case Z.SAVE:{const e=l.payload;return{page:e.page,beers:[...n.beers,...e.beers]}}default:return n}}const nn=Object(W.B)("brewery"),ln=Object(W.D)(nn,n=>n.beers),en=Object(W.D)(ln,n=>n),an="https://api.punkapi.com/v2/beers";class tn{constructor(n,l){this.store=n,this.network=l,this.page=1,this.list=[],this.connectionOptions=new i.d,this.connectionOptions.cors=!0,this.scrollCb=(()=>this.getBeers(this.page))}ngOnInit(){this.store.pipe(Object(W.E)(en)).subscribe(n=>{this.page=n.page,this.list=n.beers,0===this.list.length&&this.getBeers(this.page,0).subscribe(()=>{})})}getBeers(n,l=750){return this.network.get(`${an}?page=${n}`,this.connectionOptions).pipe(Object($.a)(l),Object(r.a)(l=>(this.store.dispatch(new X({beers:l,page:n+1})),!0)))}}const un={url:"brewery",name:"brewery-view",menuTitle:"Brewery DB",children:[{url:"beers",name:"brewery.beers-view",menuTitle:"Beers"}]},on={config:{route:un.children[0]}},rn={config:{route:un}};class sn{}var mn=e("9AJC"),cn=e("pMnS"),bn=e("SVse"),dn=a.ob({encapsulation:0,styles:[[".movie-thumbnail[_ngcontent-%COMP%]{max-width:96px}.movie-item[_ngcontent-%COMP%]{height:225px}"]],data:{}});function vn(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,2,"div",[["class","row border card-body"]],null,null,null,null,null)),(n()(),a.qb(1,0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(n()(),a.Hb(-1,null,["Loading..."]))],null,null)}function pn(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,16,"div",[],null,null,null,null,null)),(n()(),a.qb(1,0,null,null,15,"div",[["class","row border mr-0 ml-0"]],null,null,null,null,null)),(n()(),a.qb(2,0,null,null,3,"div",[["class","col-md-2"]],null,null,null,null,null)),(n()(),a.qb(3,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(n()(),a.qb(4,0,null,null,1,"div",[["class","card-body text-align"]],null,null,null,null,null)),(n()(),a.qb(5,0,null,null,0,"img",[["class","movie-thumbnail mx-auto d-block"]],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(n()(),a.qb(6,0,null,null,10,"div",[["class","col-md-10 card-body"]],null,null,null,null,null)),(n()(),a.qb(7,0,null,null,1,"h6",[["class","card-title font-weight-bold"]],null,null,null,null,null)),(n()(),a.Hb(8,null,["",""])),(n()(),a.qb(9,0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(n()(),a.Hb(10,null,["",""])),(n()(),a.qb(11,0,null,null,1,"h6",[["class","card-subtitle mt-2 text-muted"]],null,null,null,null,null)),(n()(),a.Hb(12,null,["Release: ",""])),(n()(),a.qb(13,0,null,null,1,"h6",[["class","card-subtitle mt-2 text-muted"]],null,null,null,null,null)),(n()(),a.Hb(14,null,["Language: ",""])),(n()(),a.qb(15,0,null,null,1,"h6",[["class","card-subtitle mt-2 text-muted"]],null,null,null,null,null)),(n()(),a.Hb(16,null,["Score: "," ("," votes)"]))],null,function(n,l){var e=l.component;n(l,5,0,e.movieImagePath(e.movie),a.sb(1,"",e.movie.title,"")),n(l,8,0,e.movie.title),n(l,10,0,e.movie.overview),n(l,12,0,e.movie.release_date),n(l,14,0,e.langToString(e.movie)),n(l,16,0,e.movie.vote_average,e.movie.vote_count)})}function hn(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,3,"div",[["class","movie-item"]],null,null,null,null,null)),(n()(),a.fb(0,[["loading",2]],null,0,null,vn)),(n()(),a.fb(16777216,null,null,1,null,pn)),a.pb(3,16384,null,0,bn.l,[a.N,a.K],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null)],function(n,l){n(l,3,0,l.component.movie,a.Ab(l,1))},null)}var gn=e("hOhj"),Nn=e("IP0z"),fn=e("/HVE"),kn=a.ob({encapsulation:2,styles:["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:0}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:0}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}"],data:{}});function wn(n){return a.Jb(2,[a.Fb(402653184,1,{_contentWrapper:0}),(n()(),a.qb(1,0,[[1,0],["contentWrapper",1]],null,1,"div",[["class","cdk-virtual-scroll-content-wrapper"]],null,null,null,null,null)),a.zb(null,0),(n()(),a.qb(3,0,null,null,0,"div",[["class","cdk-virtual-scroll-spacer"]],[[4,"transform",null]],null,null,null,null))],null,function(n,l){n(l,3,0,l.component._totalContentSizeTransform)})}var yn=a.ob({encapsulation:0,styles:[[".movies-viewport[_ngcontent-%COMP%]{height:800px;width:100%;position:relative;overflow-x:hidden}"]],data:{}});function qn(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,1,"dng-tmdb-movie",[],null,null,null,hn,dn)),a.pb(1,49152,null,0,V,[],{movie:[0,"movie"]},null)],function(n,l){n(l,1,0,l.context.$implicit)},null)}function Sn(n){return a.Jb(2,[(n()(),a.qb(0,0,null,null,7,"div",[["class","row shadow-sm mr-0 ml-0 mb-5 bg-white rounded"]],null,null,null,null,null)),(n()(),a.qb(1,0,null,null,6,"cdk-virtual-scroll-viewport",[["class","movies-viewport mt-3 cdk-virtual-scroll-viewport"],["itemSize","225"]],[[2,"cdk-virtual-scroll-orientation-horizontal",null],[2,"cdk-virtual-scroll-orientation-vertical",null]],null,null,wn,kn)),a.Eb(6144,null,gn.b,null,[gn.d]),a.pb(3,540672,null,0,gn.a,[],{itemSize:[0,"itemSize"]},null),a.Eb(1024,null,gn.h,gn.j,[gn.a]),a.pb(5,245760,null,0,gn.d,[a.k,a.h,a.y,[2,gn.h],[2,Nn.b],gn.f],null,null),(n()(),a.fb(16777216,null,0,1,null,qn)),a.pb(7,409600,null,0,gn.c,[a.N,a.K,a.r,[1,gn.d],a.y],{cdkVirtualForOf:[0,"cdkVirtualForOf"]},null)],function(n,l){var e=l.component;n(l,3,0,"225"),n(l,5,0),n(l,7,0,e.ds)},function(n,l){n(l,1,0,"horizontal"===a.Ab(l,5).orientation,"horizontal"!==a.Ab(l,5).orientation)})}function In(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,1,"dng-tmdb-movies",[],null,null,null,Sn,yn)),a.pb(1,49152,null,0,E,[K],null,null)],null,null)}var Dn=a.mb("dng-tmdb-movies",E,In,{},{},[]),On=e("PMRY"),jn=e("YoFo"),Tn=e("xSiY"),Cn=e("wCvv"),xn=e("Q30W"),zn=e("mVT9"),An=a.ob({encapsulation:2,styles:[],data:{}});function Fn(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,3,"dng-spinner",[["class","justify-content"],["scale","0.5"],["type","spinner-2"]],null,null,null,jn.c,jn.a)),a.pb(1,114688,null,0,Tn.a,[],{type:[0,"type"],scale:[1,"scale"]},null),(n()(),a.qb(2,0,null,0,1,"div",[["class","text-center"]],null,null,null,null,null)),(n()(),a.Hb(-1,null,["Loading planets..."]))],function(n,l){n(l,1,0,"spinner-2","0.5")},null)}function Pn(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,17,"div",[],null,null,null,null,null)),(n()(),a.qb(1,0,null,null,16,"dng-dt",[],null,null,null,Cn.b,Cn.a)),a.pb(2,4243456,null,1,xn.b,[a.k],{tableData:[0,"tableData"],dtRender:[1,"dtRender"]},null),a.Fb(603979776,1,{rows:1}),(n()(),a.qb(4,0,null,null,1,"div",[["dngDtColumnDirective",""],["dt-data","name"],["dt-title","Name"]],null,null,null,null,null)),a.pb(5,16384,[[1,4]],0,xn.a,[a.k],null,null),(n()(),a.qb(6,0,null,null,1,"div",[["dngDtColumnDirective",""],["dt-data","rotation_period"],["dt-title","Rotation period"]],null,null,null,null,null)),a.pb(7,16384,[[1,4]],0,xn.a,[a.k],null,null),(n()(),a.qb(8,0,null,null,1,"div",[["dngDtColumnDirective",""],["dt-data","diameter"],["dt-title","Diameter"]],null,null,null,null,null)),a.pb(9,16384,[[1,4]],0,xn.a,[a.k],null,null),(n()(),a.qb(10,0,null,null,1,"div",[["dngDtColumnDirective",""],["dt-data","climate"],["dt-title","Climate"]],null,null,null,null,null)),a.pb(11,16384,[[1,4]],0,xn.a,[a.k],null,null),(n()(),a.qb(12,0,null,null,1,"div",[["dngDtColumnDirective",""],["dt-data","terrain"],["dt-title","Terrain"]],null,null,null,null,null)),a.pb(13,16384,[[1,4]],0,xn.a,[a.k],null,null),(n()(),a.qb(14,0,null,null,1,"div",[["dngDtColumnDirective",""],["dt-data","population"],["dt-title","Population"]],null,null,null,null,null)),a.pb(15,16384,[[1,4]],0,xn.a,[a.k],null,null),(n()(),a.qb(16,0,null,null,1,"div",[["dngDtColumnDirective",""],["dt-render","species"],["dt-title","Species"]],null,null,null,null,null)),a.pb(17,16384,[[1,4]],0,xn.a,[a.k],null,null)],function(n,l){n(l,2,0,l.context.ngIf,l.component.renderPlanetsFn)},null)}function Jn(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,4,"div",[["class","container"]],null,null,null,null,null)),(n()(),a.fb(0,[["loading",2]],null,0,null,Fn)),(n()(),a.fb(16777216,null,null,2,null,Pn)),a.pb(3,16384,null,0,bn.l,[a.N,a.K],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),a.Cb(131072,bn.b,[a.h])],function(n,l){var e=l.component;n(l,3,0,a.Ib(l,3,0,a.Ab(l,4).transform(e.observable)),a.Ab(l,1))},null)}function Hn(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,1,"dng-planet",[],null,null,null,Jn,An)),a.pb(1,114688,null,0,h,[v,a.j,a.q,zn.a],null,null)],function(n,l){n(l,1,0)},null)}var Kn=a.mb("dng-planet",h,Hn,{},{},[]),Mn=e("iInd"),En=a.ob({encapsulation:2,styles:[],data:{}});function Bn(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,3,"dng-spinner",[["class","justify-content"],["scale","0.5"],["type","spinner-2"]],null,null,null,jn.c,jn.a)),a.pb(1,114688,null,0,Tn.a,[],{type:[0,"type"],scale:[1,"scale"]},null),(n()(),a.qb(2,0,null,0,1,"div",[["class","text-center"]],null,null,null,null,null)),(n()(),a.Hb(-1,null,["Loading..."]))],function(n,l){n(l,1,0,"spinner-2","0.5")},null)}function Ln(n){return a.Jb(0,[(n()(),a.fb(0,null,null,0))],null,null)}function Vn(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,23,null,null,null,null,null,null,null)),(n()(),a.qb(1,0,null,null,1,"h2",[["class","mt-0 mb-1"]],null,null,null,null,null)),(n()(),a.Hb(2,null,["Species: "," "])),(n()(),a.qb(3,0,null,null,20,"ul",[["class","list-unstyled"]],null,null,null,null,null)),(n()(),a.qb(4,0,null,null,4,"li",[["class","media mt-2 mb-2"]],null,null,null,null,null)),(n()(),a.qb(5,0,null,null,3,"div",[["class","media-body"]],null,null,null,null,null)),(n()(),a.qb(6,0,null,null,1,"h5",[["class","mt-0 mb-1 font-weight-bold pb-2"]],null,null,null,null,null)),(n()(),a.Hb(-1,null,["Name"])),(n()(),a.Hb(8,null,[" "," "])),(n()(),a.qb(9,0,null,null,4,"li",[["class","media mt-2 mb-2"]],null,null,null,null,null)),(n()(),a.qb(10,0,null,null,3,"div",[["class","media-body"]],null,null,null,null,null)),(n()(),a.qb(11,0,null,null,1,"h5",[["class","mt-0 mb-1 font-weight-bold pb-2"]],null,null,null,null,null)),(n()(),a.Hb(-1,null,["Homeworld"])),(n()(),a.Hb(13,null,[" "," "])),(n()(),a.qb(14,0,null,null,4,"li",[["class","media mt-2 mb-2"]],null,null,null,null,null)),(n()(),a.qb(15,0,null,null,3,"div",[["class","media-body"]],null,null,null,null,null)),(n()(),a.qb(16,0,null,null,1,"h5",[["class","mt-0 mb-1 font-weight-bold pb-2"]],null,null,null,null,null)),(n()(),a.Hb(-1,null,["Classification"])),(n()(),a.Hb(18,null,[" "," "])),(n()(),a.qb(19,0,null,null,4,"li",[["class","media mt-2 mb-2"]],null,null,null,null,null)),(n()(),a.qb(20,0,null,null,3,"div",[["class","media-body"]],null,null,null,null,null)),(n()(),a.qb(21,0,null,null,1,"h5",[["class","mt-0 mb-1 font-weight-bold pb-2"]],null,null,null,null,null)),(n()(),a.Hb(-1,null,["Language"])),(n()(),a.Hb(23,null,[" "," "]))],null,function(n,l){n(l,2,0,l.parent.context.ngIf.name),n(l,8,0,l.parent.context.ngIf.name),n(l,13,0,l.parent.context.ngIf.planet.name),n(l,18,0,l.parent.context.ngIf.classification),n(l,23,0,l.parent.context.ngIf.language)})}function _n(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),a.fb(16777216,null,null,1,null,Vn)),a.pb(2,16384,null,0,bn.l,[a.N,a.K],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null)],function(n,l){n(l,2,0,null==l.context.ngIf?null:l.context.ngIf.name,a.Ab(l.parent,2))},null)}function Gn(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,5,"div",[["class","container"]],null,null,null,null,null)),(n()(),a.fb(0,[["loading",2]],null,0,null,Bn)),(n()(),a.fb(0,[["noData",2]],null,0,null,Ln)),(n()(),a.fb(16777216,null,null,2,null,_n)),a.pb(4,16384,null,0,bn.l,[a.N,a.K],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),a.Cb(131072,bn.b,[a.h])],function(n,l){var e=l.component;n(l,4,0,a.Ib(l,4,0,a.Ab(l,5).transform(e.speciesDetails)),a.Ab(l,1))},null)}function Rn(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,1,"dng-species-detail",[],null,null,null,Gn,En)),a.pb(1,49152,null,0,f,[v,Mn.a],null,null)],null,null)}var $n=a.mb("dng-species-detail",f,Rn,{},{},[]),Wn=a.ob({encapsulation:2,styles:[],data:{}});function Yn(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,14,"dng-dt",[["dt-length-menu","10,50,100"],["dt-ordering","false"],["dt-searching","false"],["dt-server-side","true"]],null,null,null,Cn.b,Cn.a)),a.pb(1,4243456,null,1,xn.b,[a.k],{tableOptions:[0,"tableOptions"]},null),a.Fb(603979776,1,{rows:1}),(n()(),a.qb(3,0,null,null,1,"div",[["dngDtColumnDirective",""],["dt-data","name"],["dt-title","Name"]],null,null,null,null,null)),a.pb(4,16384,[[1,4]],0,xn.a,[a.k],null,null),(n()(),a.qb(5,0,null,null,1,"div",[["dngDtColumnDirective",""],["dt-data","iso2Code"],["dt-title","Code"]],null,null,null,null,null)),a.pb(6,16384,[[1,4]],0,xn.a,[a.k],null,null),(n()(),a.qb(7,0,null,null,1,"div",[["dngDtColumnDirective",""],["dt-data","capitalCity"],["dt-title","Capital"]],null,null,null,null,null)),a.pb(8,16384,[[1,4]],0,xn.a,[a.k],null,null),(n()(),a.qb(9,0,null,null,1,"div",[["dngDtColumnDirective",""],["dt-data","region.value"],["dt-title","Region"]],null,null,null,null,null)),a.pb(10,16384,[[1,4]],0,xn.a,[a.k],null,null),(n()(),a.qb(11,0,null,null,1,"div",[["dngDtColumnDirective",""],["dt-data","incomeLevel.value"],["dt-title","Income Level"]],null,null,null,null,null)),a.pb(12,16384,[[1,4]],0,xn.a,[a.k],null,null),(n()(),a.qb(13,0,null,null,1,"div",[["dngDtColumnDirective",""],["dt-data","lendingType.value"],["dt-title","Lending Type"]],null,null,null,null,null)),a.pb(14,16384,[[1,4]],0,xn.a,[a.k],null,null)],function(n,l){n(l,1,0,l.component.tableOptions)},null)}function Zn(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,1,"dng-wb",[["class","countries"]],null,null,null,Yn,Wn)),a.pb(1,49152,null,0,C,[j],null,null)],null,null)}var Xn=a.mb("dng-wb.countries",C,Zn,{},{},[]),Qn=e("e5tB"),Un=e("XRsp"),nl=a.ob({encapsulation:0,styles:[["ul[_ngcontent-%COMP%]{list-style:none}dng-spinner[_ngcontent-%COMP%]{position:relative;top:-5px;padding-bottom:2em}"]],data:{}});function ll(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function el(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,3,"li",[],null,null,null,null,null)),(n()(),a.fb(16777216,null,null,2,null,ll)),a.pb(2,540672,null,0,bn.s,[a.N],{ngTemplateOutletContext:[0,"ngTemplateOutletContext"],ngTemplateOutlet:[1,"ngTemplateOutlet"]},null),a.Db(3,{$implicit:0})],function(n,l){var e=l.component,a=n(l,3,0,l.context.$implicit);n(l,2,0,a,e.templateImpl)},null)}function al(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,2,"dng-spinner",[["class","justify-content float-left ml-4"],["scale","0.5"],["type","spinner-2"]],null,null,null,jn.c,jn.a)),a.pb(1,114688,null,0,Tn.a,[],{type:[0,"type"],scale:[1,"scale"]},null),(n()(),a.Hb(2,0,["\n","\n"]))],function(n,l){n(l,1,0,"spinner-2","0.5")},function(n,l){n(l,2,0,l.component.loadText)})}function tl(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,3,"ul",[["class","p-0"],["dngScroller",""]],null,null,null,null,null)),a.pb(1,4341760,null,0,Qn.a,[a.k],{stateTracker:[0,"stateTracker"],callback:[1,"callback"]},null),(n()(),a.fb(16777216,null,null,1,null,el)),a.pb(3,278528,null,0,bn.k,[a.N,a.K,a.r],{ngForOf:[0,"ngForOf"]},null),(n()(),a.fb(16777216,null,null,1,null,al)),a.pb(5,16384,null,0,bn.l,[a.N,a.K],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,1,0,e.stateTracker,e.scrollCb),n(l,3,0,e.list),n(l,5,0,e.loading)},null)}var il=a.ob({encapsulation:2,styles:[],data:{}});function ul(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,6,"div",[["class","card p-2"]],null,null,null,null,null)),(n()(),a.qb(1,0,null,null,1,"h5",[["class","card-title"]],null,null,null,null,null)),(n()(),a.Hb(2,null,["",""])),(n()(),a.qb(3,0,null,null,1,"h6",[["class","card-subtitle mb-2 text-muted"]],null,null,null,null,null)),(n()(),a.Hb(4,null,["",""])),(n()(),a.qb(5,0,null,null,1,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),a.Hb(6,null,["",""]))],null,function(n,l){n(l,2,0,l.context.$implicit.name),n(l,4,0,l.context.$implicit.tagline),n(l,6,0,l.context.$implicit.description)})}function ol(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,3,"dng-infinite-scroll",[],null,null,null,tl,nl)),a.pb(1,180224,null,1,Un.a,[],{scrollCb:[0,"scrollCb"],list:[1,"list"]},null),a.Fb(603979776,1,{templateImpl:0}),(n()(),a.fb(0,[[1,2],["itemData",2]],null,0,null,ul))],function(n,l){var e=l.component;n(l,1,0,e.scrollCb,e.list)},null)}function rl(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,1,"dng-beers",[],null,null,null,ol,il)),a.pb(1,114688,null,0,tn,[W.n,P.b],null,null)],function(n,l){n(l,1,0)},null)}var sl=a.mb("dng-beers",tn,rl,{},{},[]),ml=e("s7LF"),cl=e("G0yt"),bl=e("Mc5n"),dl=e("QB0v"),vl=e("3QYm");class pl{}class hl{}class gl{}class Nl{}var fl=e("97Sj");e.d(l,"DraalAppPagesApiModuleNgFactory",function(){return kl});var kl=a.nb(sn,[],function(n){return a.xb([a.yb(512,a.j,a.ab,[[8,[mn.a,mn.b,mn.j,mn.k,mn.g,mn.h,mn.i,cn.a,Dn,On.a,Kn,$n,Xn,sl]],[3,a.j],a.w]),a.yb(4608,bn.n,bn.m,[a.t,[2,bn.H]]),a.yb(4608,ml.z,ml.z,[]),a.yb(4608,cl.z,cl.z,[a.j,a.q,cl.mb,cl.A]),a.yb(4608,bl.i,bl.i,[bn.d,a.y,gn.i,bl.k]),a.yb(4608,v,v,[P.b]),a.yb(4608,j,j,[P.b]),a.yb(4608,K,K,[P.b]),a.yb(1073742336,bn.c,bn.c,[]),a.yb(1073742336,dl.a,dl.a,[]),a.yb(1073742336,cl.d,cl.d,[]),a.yb(1073742336,cl.g,cl.g,[]),a.yb(1073742336,cl.h,cl.h,[]),a.yb(1073742336,cl.l,cl.l,[]),a.yb(1073742336,cl.m,cl.m,[]),a.yb(1073742336,ml.y,ml.y,[]),a.yb(1073742336,ml.m,ml.m,[]),a.yb(1073742336,cl.r,cl.r,[]),a.yb(1073742336,cl.w,cl.w,[]),a.yb(1073742336,cl.B,cl.B,[]),a.yb(1073742336,cl.F,cl.F,[]),a.yb(1073742336,cl.I,cl.I,[]),a.yb(1073742336,cl.L,cl.L,[]),a.yb(1073742336,cl.O,cl.O,[]),a.yb(1073742336,cl.T,cl.T,[]),a.yb(1073742336,cl.X,cl.X,[]),a.yb(1073742336,cl.Y,cl.Y,[]),a.yb(1073742336,cl.Z,cl.Z,[]),a.yb(1073742336,cl.C,cl.C,[]),a.yb(1073742336,Mn.u,Mn.u,[[2,Mn.A],[2,Mn.q]]),a.yb(1073742336,bl.j,bl.j,[]),a.yb(1073742336,vl.a,vl.a,[]),a.yb(1073742336,pl,pl,[]),a.yb(1073742336,hl,hl,[]),a.yb(1024,W.F,function(){return[{}]},[]),a.yb(1024,W.j,function(){return[{key:"brewery",reducerFactory:W.z,metaReducers:[],initialState:void 0}]},[]),a.yb(1024,W.G,W.H,[a.q,W.F,W.j]),a.yb(1024,W.q,function(){return[{beers:U}]},[]),a.yb(1024,W.r,function(n){return[n]},[W.q]),a.yb(1024,W.b,function(n,l,e){return[W.w(n,l,e)]},[a.q,W.q,W.r]),a.yb(1073873408,W.o,W.o,[W.G,W.b,W.g,W.p]),a.yb(1073742336,gl,gl,[]),a.yb(1073742336,Nn.a,Nn.a,[]),a.yb(1073742336,fn.b,fn.b,[]),a.yb(1073742336,gn.g,gn.g,[]),a.yb(1073742336,Nl,Nl,[]),a.yb(1073742336,sn,sn,[]),a.yb(1024,Mn.n,function(){return[[{path:"",component:fl.b,children:[{component:fl.b,path:"star-wars",data:I,children:[{component:h,path:"planets",data:y},{component:fl.b,path:"species",data:q,children:[{component:f,path:":id",data:S}]}]},{path:"world-bank",component:fl.b,data:F,children:[{component:C,path:"countries",data:z},{component:fl.b,path:"GDP",data:A}]},{component:fl.b,path:"brewery",data:rn,children:[{component:tn,path:"beers",data:on}]},{component:fl.b,path:"movie-db",data:R,children:[{component:E,path:"top-rated",data:G}]}]}]]},[])])})}}]);