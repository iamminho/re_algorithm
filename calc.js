import dayjs from "dayjs"
let now = dayjs();
console.log(now.format());
let datas = [
	{
		carTypeNm: '일반',
		valetTypeNm: '일반',
		statusNm: '예약접수',
		maskingPhone: '01097680922',
		areaNm: null,
		uid: 16,
		reservation: 1,
		receiveNo: '1650873058369',
		receiver: null,
		carNumber: '003테0425',
		carType: 0,
		carBrand: '현대',
		carModel: 'i30',
		valetType: 0,
		status: 0,
		phone: '9WSc6RkTK4RHRGD/BnAl2Q==',
		area: null,
		keyStore: null,
		photos: [],
		memo: null,
		userRequest: '',
		airPlaneNumber: '',
		valetTerm: null,
		useDatetime: '2022-04-25T13:00:00.000Z',
		arrivedDatetime: '2022-04-26T20:05:00.000Z',
		cancelDatetime: null,
		createdAt: '2022-04-25T07:50:58.000Z',
	},
	{
		carTypeNm: '일반',
		valetTypeNm: '프리미엄',
		statusNm: '차량접수',
		maskingPhone: '01097680922',
		areaNm: 'H구역',
		uid: 15,
		reservation: 0,
		receiveNo: '1650866189912',
		receiver: 'dev',
		carNumber: '002테0425',
		carType: 0,
		carBrand: '현대',
		carModel: '아토스',
		valetType: 1,
		status: 1,
		phone: '9WSc6RkTK4RHRGD/BnAl2Q==',
		area: 1,
		keyStore: 0,
		photos: [],
		memo: null,
		userRequest: null,
		airPlaneNumber: null,
		valetTerm: null,
		useDatetime: '2022-04-25T05:56:29.000Z',
		arrivedDatetime: '2022-04-29T15:00:00.000Z',
		cancelDatetime: null,
		createdAt: '2022-04-25T05:56:29.000Z',
	},
	{
		carTypeNm: '일반',
		valetTypeNm: '일반',
		statusNm: '예약접수',
		maskingPhone: '01097680922',
		areaNm: null,
		uid: 13,
		reservation: 1,
		receiveNo: '1650608261096',
		receiver: null,
		carNumber: '001테0422',
		carType: 0,
		carBrand: '현대',
		carModel: 'i40',
		valetType: 0,
		status: 0,
		phone: '9WSc6RkTK4RHRGD/BnAl2Q==',
		area: null,
		keyStore: null,
		photos: [],
		memo: null,
		userRequest: '',
		airPlaneNumber: '',
		valetTerm: null,
		useDatetime: '2022-04-23T15:00:00.000Z',
		arrivedDatetime: '2022-04-28T17:00:00.000Z',
		cancelDatetime: null,
		createdAt: '2022-04-22T06:17:41.000Z',
	},
    {
		carTypeNm: '일반',
		valetTypeNm: '일반',
		statusNm: '예약접수',
		maskingPhone: '01097680922',
		areaNm: null,
		uid: 13,
		reservation: 1,
		receiveNo: '1650608261096',
		receiver: null,
		carNumber: '001테0422',
		carType: 0,
		carBrand: '현대',
		carModel: 'i40',
		valetType: 0,
		status: 0,
		phone: '9WSc6RkTK4RHRGD/BnAl2Q==',
		area: null,
		keyStore: null,
		photos: [],
		memo: null,
		userRequest: '',
		airPlaneNumber: '',
		valetTerm: null,
		useDatetime: '2022-04-23T15:00:00.000Z',
		arrivedDatetime: '2022-04-28T17:00:00.000Z',
		cancelDatetime: null,
		createdAt: '2022-04-22T06:17:41.000Z',
	}
]
// console.log(data[0].useDatetime);

let newArray = [];
const test = new Map();
test.set("1",1);
console.log("test:", test.get("1"));

function classification2(data){
    let date = data["useDatetime"];
    let out = data["arrivedDatetime"];
    let status = false;
    newArray.map(v => {if(v.get("id") === date){
        v.set("reservation", v.get("reservation")+1);
        status = true;
    }
    })
    if(status === false){
        let tmp = new Map();
        tmp.set("id", date);
        tmp.set("reservation", 1);
        newArray = [...newArray, tmp];
    }
}


for(let data of datas){
    console.log("data!!!",data["useDatetime"]);
    classification2(data);
}
console.log(newArray);


