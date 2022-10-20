import TypeDb from "../../../types/TypeDb";

const db: Array<TypeDb> = [
    {
        id : 1,
        type: 'pix',
        amount: 100,
        date: '2022-10-19',
        description: 'Pizza com a galera',
        operation: 'credit'
    },

    {
        id : 2,
        type: 'deposito',
        amount: 400,
        date: '2022-10-19',
        description: 'Deposito de salário',
        operation: 'credit'

    } ,
    
    {
        id : 3,
        type: 'saque',
        amount: 200,
        date: '2022-10-18',
        description: 'Saque no caixa eletrônico',
        operation: 'debit'
    },

    {
        id : 4,
        type: 'Transferência',
        amount: 50,
        date: '2022-10-19',
        description: 'Transferência para o João',
        operation: 'debit'
    },

    {
        id : 5,
        type: 'debit',
        amount: 100,
        date: '2022-10-19',
        description: 'Pagamento de conta de luz',
        operation: 'debit'
    },

    {
        id : 6,
        type: 'pix',
        amount: 1500,
        date: '2022-10-19',
        description: 'Apostas esportivas',
        operation: 'credit'
    },

    {
        id : 7,
        type: 'ted',
        amount: 2000,
        date: '2022-10-19',
        description: 'Salário',
        operation: 'credit'
    },

    {
        id : 8,
        type: 'saque',
        amount: 600,
        date: '2022-10-19',
        description: 'Saque no caixa eletrônico',
        operation: 'debit'
    }
];

export default db;