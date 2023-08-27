const populate = async(values, currency)=>{
    let mystr = ""
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_u1worI2XazNvFvRaJMLNJlVHB8MZn5cIEYNx8ILI&base_currency=" + currency
    let response = await fetch(url)
    let rJson = await response.json()
    document.querySelector('.output').style.display = "block"
    for (let key of  Object.keys(rJson["data"])){
        p=key
        if(key=="ADA"){p="Cardano"}
        else if(key=="AED"){p="United Arab Emirates dirham"}
        else if(key=="AFN"){p="	Afghan afghani"}
        else if(key=="ALL"){p="	Albanian lek"}
        else if(key=="AMD"){p="Armenian dram"}
        else if(key=="ANG"){p="Netherlands Antillean Guilder"}
        else if(key=="AOA"){p="	Angolan kwanza"}
        else if(key=="ARB"){p="Arbitrum Price"}
        else if(key=="ARS"){p="Argentine peso"}
        else if(key=="AUD"){p="	Australian dollar"}
        else if(key=="AVAX"){p="Avalanche USD"}
        else if(key=="AWG"){p="Aruban or Dutch Guilder"}
        else if(key=="AZN"){p="Azerbaijani manat"}
        else if(key=="BAM"){p="Bosnia and Herzegovina convertible mark"}
        else if(key=="BBD"){p="Barbadian dollar"}
        else if(key=="BDT"){p="Bangladeshi taka"}
        else if(key=="BGN"){p="Bulgarian lev"}
        else if(key=="BHD"){p="Bahraini dinar"}
        else if(key=="BIF"){p="Burundian franc"}
        else if(key=="BMD"){p="Bermudian dollar"}
        else if(key=="BNB"){p="Binance Coin"}
        else if(key=="BND"){p="Brunei dollar"}
        else if(key=="BOB"){p="Bolivian boliviano"}
        else if(key=="BRL"){p="Brazilian real"}
        else if(key=="BSD"){p="Bahamian dollar"}
        else if(key=="BTC"){p="Bitcoin"}
        else if(key=="BTN"){p="Bhutanese ngultrum"}
        else if(key=="BUSD"){p="Binance USD"}
        else if(key=="BWP"){p="Botswana pula"}
        else if(key=="BYN"){p="	Belarusian ruble"}
        else if(key=="BYR"){p="Belarusian Rub"}
        else if(key=="BZD"){p="Belize dollar"}
        else if(key=="CAD"){p="Canadian dolar"}
        else if(key=="CDF"){p="Congolesranc"}
        else if(key=="CHF"){p="Swiss franc"}
        else if(key=="CLF"){p="Chilean Unit of Account"}
        else if(key=="CLP"){p="Chilean peso"}
        else if(key=="COP"){p="Colombian peso"}
        else if(key=="CNY"){p="Chinese yuan"}
        else if(key=="CRC"){p="Costa Rican colón"}
        else if(key=="CUC"){p="Cuban Convertible Peso"}
        else if(key=="CUP"){p="Cuban peso"}
        else if(key=="CVE"){p="Cape Verdean escudo"}
        else if(key=="CZK"){p="Czech koruna"}
        else if(key=="DJF"){p="Djiboutian franc"}
        else if(key=="DKK"){p="Danish krone"}
        else if(key=="DOP"){p="Dominican peso"}
        else if(key=="DOT"){p="Polkadot"}
        else if(key=="DZD"){p="Algerian dinar"}
        else if(key=="EGP"){p="Egyptian pound"}
        else if(key=="ERN"){p="Eritrean nakfa"}
        else if(key=="ETB"){p="Ethiopian birr"}
        else if(key=="ETH"){ p="Ether"}
        else if(key=="EUR"){p="Euro"}
        else if(key=="FJD"){p="Fijian dollar"}
        else if(key=="FKP"){p="Falkland Island Pound"}
        else if(key=="GBP"){p="British pound"}
        else if(key=="GEL"){p="Georgian lari"}
        else if(key=="GGP"){p="Guernsey Pounds"}
        else if(key=="GHS"){p="Ghanaian cedi"}
        else if(key=="GIP"){p="Gibraltar pound"}
        else if(key=="GMD"){p="Gambian dalasi"}
        else if(key=="GNF"){p="Guinean franc"}
        else if(key=="GTQ"){p="Guatemalan quetzal"}
        else if(key=="GYD"){p="Guyanese dollar"}
        else if(key=="HKD"){ p="Hong Kong Dollar"}
        else if(key=="HNL"){p="Honduran lempira"}
        else if(key=="HRK"){p="Croatian kuna"}
        else if(key=="HTG"){p="Haitian gourde"}
        else if(key=="HUF"){p="Hungarian forint"}
        else if(key=="IDR"){p="Indonesian rupiah"}
        else if(key=="ILS"){p="Israeli new shekel"}
        else if(key=="INR"){p="Indian rupee"}
        else if(key=="IQD"){p="Iraqi dinar"}
        else if(key=="IRR"){p="Iranian rial"}
        else if(key=="ISK"){p="Icelandic króna"}
        else if(key=="JEP"){p="Jersey Pound"}
        else if(key=="JMD"){p="Jamaican dollar"}
        else if(key=="JOD"){p="Jordanian dinar"}
        else if(key=="JPY"){p="Japanese yen"}
        else if(key=="KES"){p="Kenyan shilling"}
        else if(key=="KGS"){p="Kyrgyzstani som"}
        else if(key=="KHR"){p="Cambodian riel"}
        else if(key=="KMF"){p="Comorian franc"}
        else if(key=="KPW"){p="North Korean won"}
        else if(key=="KRW"){p="South Korean won"}
        else if(key=="KWD"){p="Kuwaiti dinar"}
        else if(key=="KYD"){p="Cayman Islands Dollar"}
        else if(key=="KZT"){p="Kazakhstani tenge"}
        else if(key=="LAK"){p="Lao kip"}
        else if(key=="LAB"){p="Lebanese pound"}
        else if(key=="LKR"){p="Sri Lankan rupee"}
        else if(key=="LRD"){p="Liberian dollar"}
        else if(key=="LSL"){p="Lesotho loti"}
        else if(key=="LTC"){p="Litecoin"}
        else if(key=="LTL"){p="Lithuanian litas"}
        else if(key=="LVL"){p="Latvian Lats"}
        else if(key=="LYD"){p="Libyan dinar"}
        else if(key=="KWD"){p="Kuwaiti dinar"}
        else if(key=="MAD"){p="Moroccan dirham"}
        else if(key=="MDL"){p="Moldovan leu"}
        else if(key=="MGA"){p="Malagasy ariary"}
        else if(key=="MKD"){p="Macedonian denar"}
        else if(key=="MMK"){p="Burmese kyat"}
        else if(key=="MNT"){p="Mongolian tögrög"}
        else if(key=="MRO"){p="Mauritanian ouguiya"}
        else if(key=="MUR"){p="Mauritian rupee"}
        else if(key=="MVR"){p="Maldivian rufiyaa"}
        else if(key=="MWK"){p="Malawian kwacha"}
        else if(key=="MXN"){p="Mexican peso"}
        else if(key=="MYR"){p="Malaysian ringgit"}
        else if(key=="MZN"){p="Mozambican metical"}
        else if(key=="NAD"){p="Namibian dollar"}	
        else if(key=="NGN"){p="Nigerian naira"}
        else if(key=="NIO"){p="Nicaraguan córdoba"}	
        else if(key=="NOK"){p="Norwegian kron"}
        else if(key=="NPR"){p="Nepalese rupee"}
        else if(key=="NZD"){p="New Zealand dollar"}	
        else if(key=="OMR"){p="Omani Roma"}
        else if(key=="PAB"){p="Panamanian"}
        else if(key=="PEN"){p="Peruvian sol"}	
        else if(key=="PGK"){p="Papua New Guinean kina"}	
        else if(key=="PHP"){p="Philippine peso"}
        else if(key=="PKR"){p="Pakistani rupee"}
        else if(key=="PLN"){p="Polish zloty"}
        else if(key=="PYG"){p="Paraguayan guaraní"}	
        else if(key=="QAR"){p="Qatari riyal"}
        else if(key=="RON"){p="Romanian leu	"}
        else if(key=="RSD"){p="Serbian dinar"}	
        else if(key=="RUB"){p="Russian ruble"}	
        else if(key=="RWF"){p="Rwandan franc"}	
        else if(key=="SAR"){p="Saudi riyal	"}
        else if(key=="SBD"){p="Solomon Islands dollar"}	
        else if(key=="SCR"){p="Seychellois rupee"}
        else if(key=="SDG"){p="Sudanese pound"}
        else if(key=="SEK"){p="Swedish krona"}
        else if(key=="SGD"){p="Singapore dollar"}	
        else if(key=="SLL"){p="Sierra Leonean leone"}
        else if(key=="SOS"){p="Somali shilling"}
        else if(key=="SRD"){p="Surinamese dollar"}	
        else if(key=="SSP"){p="South Sudanese pound"}	
        else if(key=="STD"){p="São Tomé and Príncipe dobra"}
        else if(key=="SYP"){p="Syrian pound"}
        else if(key=="SZL"){p="Swazi lilangeni"}
        else if(key=="THB"){p="Thai baht"}
        else if(key=="TJS"){p="Tajikistani somoni"}
        else if(key=="TMT"){p="Turkmenistan manat"}
        else if(key=="TND"){p="Tunisian dinar"}
        else if(key=="TOP"){p="Tongan pa'anga"}
        else if(key=="TRY"){p="Turkish lira	"}
        else if(key=="TTD"){p="Trinidad and Tobago dollar"}
        else if(key=="TWD"){p="New Taiwan dollar"}
        else if(key=="TZS"){p="Tanzanian shilling"}
        else if(key=="UAH"){p="Ukrainian hryvnia"}
        else if(key=="UGX"){p="Ugandan shilling	"}
        else if(key=="USD"){p="United States dollar"}	
        else if(key=="UYU"){p="Uruguayan peso"}
        else if(key=="UZS"){p="Uzbekistani som"}
        else if(key=="VEF"){p="Venezuelan bolívar"}
        else if(key=="VND"){p="Vietnamese dong"}
        else if(key=="WST"){p="Samoan tala"}
        else if(key=="XAF"){p="Central African CFA franc"}
        else if(key=="XCD"){p="East Caribbean dollar"}
        else if(key=="XOF"){p="West African CFA franc"}
        else if(key=="YER"){p="Yemeni rial"}
        else if(key=="ZAR"){p="South African rand"}
        else if(key=="ZMW"){p="Zambian kwacha"}

        mystr+= `<tr>
                    <td>${p}</td>
                    <td>${rJson["data"][key]["code"]}</td>
                    <td>${Math.round(rJson["data"][key]["value"] * values)}</td>
                </tr>`
    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = mystr;
}
const btn = document.querySelector(".btn");
btn.addEventListener("click", (e)=>{
    e.preventDefault();
    const values = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='Currency']").value;
    populate(values, currency);
})
