
interface IYear {
    count1: number;
    count2:number
    count3:number
}

export interface IDtata {
    id: number;
    name: string;
    tonna:string | null;
    sent:string | null;
    hectare:string | null;
    years: IYear[]
}

interface ICrops {
    title: string;
    data: IDtata[]
}

export const reportData:ICrops[] = [
    {
        title: "Выращивание сельхозкультур",
        data: [
            {
                id: 1,
                name: "Хлопок",
                tonna: "тонна",
                sent: "ц/га",
                hectare: "га",
                years: [
                    {
                        count1: 11020,
                        count2: 11.8,
                        count3: 13054,
                    },
                    {
                        count1: 10000,
                        count2: 30.0,
                        count3: 30013,
                    },
                    {
                        count1: 10000,
                        count2: 41.6,
                        count3: 41633,
                    },
                    {
                        count1: 11000,
                        count2: 39.1,
                        count3: 43047,
                    },
                    {
                        count1: 11461,
                        count2: 40.0,
                        count3: 45840,
                    },
                ]
            },
            {
                id: 2,
                name: "Пшеница",
                tonna: "тонна",
                sent: "ц/га",
                hectare: "га",
                years: [
                    {
                        count1: 11020,
                        count2: 11.8,
                        count3: 13054,
                    },
                    {
                        count1: 10000,
                        count2: 30.0,
                        count3: 30013,
                    },
                    {
                        count1: 10000,
                        count2: 41.6,
                        count3: 41633,
                    },
                    {
                        count1: 11000,
                        count2: 39.1,
                        count3: 43047,
                    },
                    {
                        count1: 11461,
                        count2: 40.0,
                        count3: 45840,
                    },
                ]
            },
            {
                id: 3,
                name: "Рис (шалы)",
                tonna: "тонна",
                sent: "ц/га",
                hectare: "га",
                years: [
                    {
                        count1: 11020,
                        count2: 11.8,
                        count3: 13054,
                    },
                    {
                        count1: 10000,
                        count2: 30.0,
                        count3: 30013,
                    },
                    {
                        count1: 10000,
                        count2: 41.6,
                        count3: 41633,
                    },
                    {
                        count1: 11000,
                        count2: 39.1,
                        count3: 43047,
                    },
                    {
                        count1: 11461,
                        count2: 40.0,
                        count3: 45840,
                    },
                ]
            },
            {
                id: 4,
                name: "Коконы",
                tonna: "тонна",
                sent: null,
                hectare: null,
                years: [
                    {
                        count1: 11020,
                        count2: 11.8,
                        count3: 13054,
                    },
                    {
                        count1: 10000,
                        count2: 30.0,
                        count3: 30013,
                    },
                    {
                        count1: 10000,
                        count2: 41.6,
                        count3: 41633,
                    },
                    {
                        count1: 11000,
                        count2: 39.1,
                        count3: 43047,
                    },
                    {
                        count1: 11461,
                        count2: 40.0,
                        count3: 45840,
                    },
                ]
            },
            {
                id: 5,
                name: "Картофель",
                tonna: "тонна",
                sent: null,
                hectare: null,
                years: [
                    {
                        count1: 11020,
                        count2: 11.8,
                        count3: 13054,
                    },
                    {
                        count1: 10000,
                        count2: 30.0,
                        count3: 30013,
                    },
                    {
                        count1: 10000,
                        count2: 41.6,
                        count3: 41633,
                    },
                    {
                        count1: 11000,
                        count2: 39.1,
                        count3: 43047,
                    },
                    {
                        count1: 11461,
                        count2: 40.0,
                        count3: 45840,
                    },
                ]
            },
            {
                id: 6,
                name: "Картофель",
                tonna: "тонна",
                sent: null,
                hectare: null,
                years: [
                    {
                        count1: 11020,
                        count2: 11.8,
                        count3: 13054,
                    },
                    {
                        count1: 10000,
                        count2: 30.0,
                        count3: 30013,
                    },
                    {
                        count1: 10000,
                        count2: 41.6,
                        count3: 41633,
                    },
                    {
                        count1: 11000,
                        count2: 39.1,
                        count3: 43047,
                    },
                    {
                        count1: 11461,
                        count2: 40.0,
                        count3: 45840,
                    },
                ]
            },
            {
                id: 7,
                name: "Соя",
                tonna: "тонна",
                sent: null,
                hectare: null,
                years: [
                    {
                        count1: 11020,
                        count2: 11.8,
                        count3: 13054,
                    },
                    {
                        count1: 10000,
                        count2: 30.0,
                        count3: 30013,
                    },
                    {
                        count1: 10000,
                        count2: 41.6,
                        count3: 41633,
                    },
                    {
                        count1: 11000,
                        count2: 39.1,
                        count3: 43047,
                    },
                    {
                        count1: 11461,
                        count2: 40.0,
                        count3: 45840,
                    },
                ]
            },
            {
                id: 8,
                name: "Рыба",
                tonna: "тонна",
                sent: null,
                hectare: null,
                years: [
                    {
                        count1: 11020,
                        count2: 11.8,
                        count3: 13054,
                    },
                    {
                        count1: 10000,
                        count2: 30.0,
                        count3: 30013,
                    },
                    {
                        count1: 10000,
                        count2: 41.6,
                        count3: 41633,
                    },
                    {
                        count1: 11000,
                        count2: 39.1,
                        count3: 43047,
                    },
                    {
                        count1: 11461,
                        count2: 40.0,
                        count3: 45840,
                    },
                ]
            },
        ]
    },
    {
        title: "Промышленная продукцияр",
        data: [
            {
                id: 1,
                name: "Хлопковолокно",
                tonna: "тонна",
                sent: null,
                hectare: null,
                years: [
                    {
                        count1: 11020,
                        count2: 11.8,
                        count3: 11461,
                    },
                    {
                        count1: 10000,
                        count2: 30.0,
                        count3: 11461,
                    },
                    {
                        count1: 10000,
                        count2: 41.6,
                        count3: 11461,
                    },
                    {
                        count1: 11000,
                        count2: 39.1,
                        count3: 11461,
                    },
                    {
                        count1: 11461,
                        count2: 40.0,
                        count3: 11461,
                    },
                ]
            },
            {
                id: 2,
                name: "Семена хлопчатника",
                tonna: "тонна",
                sent: null,
                hectare: null,
                years: [
                    {
                        count1: 11020,
                        count2: 11.8,
                        count3: 11461,
                    },
                    {
                        count1: 10000,
                        count2: 30.0,
                        count3: 11461,
                    },
                    {
                        count1: 10000,
                        count2: 41.6,
                        count3: 11461,
                    },
                    {
                        count1: 11000,
                        count2: 39.1,
                        count3: 11461,
                    },
                    {
                        count1: 11461,
                        count2: 40.0,
                        count3: 11461,
                    },
                ]
            },
            {
                id: 3,
                name: "Линт",
                tonna: "тонна",
                sent: null,
                hectare: null,
                years: [
                    {
                        count1: 11020,
                        count2: 11.8,
                        count3: 11461,
                    },
                    {
                        count1: 10000,
                        count2: 30.0,
                        count3: 11461,
                    },
                    {
                        count1: 10000,
                        count2: 41.6,
                        count3: 11461,
                    },
                    {
                        count1: 11000,
                        count2: 39.1,
                        count3: 11461,
                    },
                    {
                        count1: 11461,
                        count2: 40.0,
                        count3: 11461,
                    },
                ]
            },
            {
                id: 4,
                name: "Рис",
                tonna: "тонна",
                sent: null,
                hectare: null,
                years: [
                    {
                        count1: 11020,
                        count2: 11.8,
                        count3: 11461,
                    },
                    {
                        count1: 10000,
                        count2: 30.0,
                        count3: 11461,
                    },
                    {
                        count1: 10000,
                        count2: 41.6,
                        count3: 11461,
                    },
                    {
                        count1: 11000,
                        count2: 39.1,
                        count3: 11461,
                    },
                    {
                        count1: 11461,
                        count2: 40.0,
                        count3: 11461,
                    },
                ]
            },
            {
                id: 5,
                name: "Тушка",
                tonna: "тонна",
                sent: null,
                hectare: null,
                years: [
                    {
                        count1: 11020,
                        count2: 11.8,
                        count3: 11461,
                    },
                    {
                        count1: 10000,
                        count2: 30.0,
                        count3: 11461,
                    },
                    {
                        count1: 10000,
                        count2: 41.6,
                        count3: 11461,
                    },
                    {
                        count1: 11000,
                        count2: 39.1,
                        count3: 11461,
                    },
                    {
                        count1: 11461,
                        count2: 40.0,
                        count3: 11461,
                    },
                ]
            },
            {
                id: 6,
                name: "Рыбная мука",
                tonna: "тонна",
                sent: null,
                hectare: null,
                years: [
                    {
                        count1: 11020,
                        count2: 11.8,
                        count3: 11461,
                    },
                    {
                        count1: 10000,
                        count2: 30.0,
                        count3: 11461,
                    },
                    {
                        count1: 10000,
                        count2: 41.6,
                        count3: 11461,
                    },
                    {
                        count1: 11000,
                        count2: 39.1,
                        count3: 11461,
                    },
                    {
                        count1: 11461,
                        count2: 40.0,
                        count3: 11461,
                    },
                ]
            },
        ]
    },
    {
        title: "Оказываемые услуги",
        data: [
            {
                id: 1,
                name: "Механизация",
                tonna: null,
                sent: null,
                hectare: "млн.сум",
                years: [
                    {
                        count1: 11020,
                        count2: 11.8,
                        count3: 13054,
                    },
                    {
                        count1: 10000,
                        count2: 30.0,
                        count3: 30013,
                    },
                    {
                        count1: 10000,
                        count2: 41.6,
                        count3: 41633,
                    },
                    {
                        count1: 11000,
                        count2: 39.1,
                        count3: 43047,
                    },
                    {
                        count1: 11461,
                        count2: 40.0,
                        count3: 45840,
                    },
                ]
            },
            {
                id: 2,
                name: "Строительство",
                tonna: null,
                sent: null,
                hectare: "млн.сум",
                years: [
                    {
                        count1: 11020,
                        count2: 11.8,
                        count3: 13054,
                    },
                    {
                        count1: 10000,
                        count2: 30.0,
                        count3: 30013,
                    },
                    {
                        count1: 10000,
                        count2: 41.6,
                        count3: 41633,
                    },
                    {
                        count1: 11000,
                        count2: 39.1,
                        count3: 43047,
                    },
                    {
                        count1: 11461,
                        count2: 40.0,
                        count3: 45840,
                    },
                ]
            },
            {
                id: 3,
                name: "Общественное питание",
                tonna: null,
                sent: null,
                hectare: "млн.сум",
                years: [
                    {
                        count1: 11020,
                        count2: 11.8,
                        count3: 13054,
                    },
                    {
                        count1: 10000,
                        count2: 30.0,
                        count3: 30013,
                    },
                    {
                        count1: 10000,
                        count2: 41.6,
                        count3: 41633,
                    },
                    {
                        count1: 11000,
                        count2: 39.1,
                        count3: 43047,
                    },
                    {
                        count1: 11461,
                        count2: 40.0,
                        count3: 45840,
                    },
                ]
            },
            {
                id: 4,
                name: "Услуги логистики",
                tonna: null,
                sent: null,
                hectare: "млн.сум",
                years: [
                    {
                        count1: 11020,
                        count2: 11.8,
                        count3: 13054,
                    },
                    {
                        count1: 10000,
                        count2: 30.0,
                        count3: 30013,
                    },
                    {
                        count1: 10000,
                        count2: 41.6,
                        count3: 41633,
                    },
                    {
                        count1: 11000,
                        count2: 39.1,
                        count3: 43047,
                    },
                    {
                        count1: 11461,
                        count2: 40.0,
                        count3: 45840,
                    },
                ]
            },
            {
                id: 5,
                name: "Туристические услуги",
                tonna: null,
                sent: null,
                hectare: "млн.сум",
                years: [
                    {
                        count1: 11020,
                        count2: 11.8,
                        count3: 13054,
                    },
                    {
                        count1: 10000,
                        count2: 30.0,
                        count3: 30013,
                    },
                    {
                        count1: 10000,
                        count2: 41.6,
                        count3: 41633,
                    },
                    {
                        count1: 11000,
                        count2: 39.1,
                        count3: 43047,
                    },
                    {
                        count1: 11461,
                        count2: 40.0,
                        count3: 45840,
                    },
                ]
            },
        ]
    },
    {
        title: "Другие статистические данные",
        data: [
            {
                id: 1,
                name: "Поступление, всего",
                tonna: null,
                sent: null,
                hectare: "млн.сум",
                years: [
                    {
                        count1: 11020,
                        count2: 11.8,
                        count3: 11461,
                    },
                    {
                        count1: 10000,
                        count2: 30.0,
                        count3: 11461,
                    },
                    {
                        count1: 10000,
                        count2: 41.6,
                        count3: 11461,
                    },
                    {
                        count1: 11000,
                        count2: 39.1,
                        count3: 43047,
                    },
                    {
                        count1: 11461,
                        count2: 40.0,
                        count3: 11461,
                    },
                ]
            },
            {
                id: 2,
                name: "Налоговые платежи",
                tonna: null,
                sent: null,
                hectare: "млн.сум",
                years: [
                    {
                        count1: 11020,
                        count2: 11.8,
                        count3: 11461,
                    },
                    {
                        count1: 10000,
                        count2: 30.0,
                        count3: 11461,
                    },
                    {
                        count1: 10000,
                        count2: 41.6,
                        count3: 11461,
                    },
                    {
                        count1: 11000,
                        count2: 39.1,
                        count3: 43047,
                    },
                    {
                        count1: 11461,
                        count2: 40.0,
                        count3: 45840,
                    },
                ]
            },
            {
                id: 3,
                name: "Численность работников",
                tonna: null,
                sent: null,
                hectare: "млн.сум",
                years: [
                    {
                        count1: 11020,
                        count2: 11.8,
                        count3: 13054,
                    },
                    {
                        count1: 10000,
                        count2: 30.0,
                        count3: 30013,
                    },
                    {
                        count1: 10000,
                        count2: 41.6,
                        count3: 41633,
                    },
                    {
                        count1: 11000,
                        count2: 39.1,
                        count3: 43047,
                    },
                    {
                        count1: 11461,
                        count2: 40.0,
                        count3: 45840,
                    },
                ]
            },
            {
                id: 4,
                name: "Выплаченная зарплата",
                tonna: null,
                sent: null,
                hectare: "млн.сум",
                years: [
                    {
                        count1: 11020,
                        count2: 11.8,
                        count3: 13054,
                    },
                    {
                        count1: 10000,
                        count2: 30.0,
                        count3: 30013,
                    },
                    {
                        count1: 10000,
                        count2: 41.6,
                        count3: 41633,
                    },
                    {
                        count1: 11000,
                        count2: 39.1,
                        count3: 43047,
                    },
                    {
                        count1: 11461,
                        count2: 40.0,
                        count3: 45840,
                    },
                ]
            },
            {
                id: 5,
                name: "Средняя зарплата",
                tonna: null,
                sent: null,
                hectare: "млн.сум",
                years: [
                    {
                        count1: 11020,
                        count2: 11.8,
                        count3: 13054,
                    },
                    {
                        count1: 10000,
                        count2: 30.0,
                        count3: 30013,
                    },
                    {
                        count1: 10000,
                        count2: 41.6,
                        count3: 41633,
                    },
                    {
                        count1: 11000,
                        count2: 39.1,
                        count3: 43047,
                    },
                    {
                        count1: 11461,
                        count2: 40.0,
                        count3: 45840,
                    },
                ]
            },
        ]
    }
]