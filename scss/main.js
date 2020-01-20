const a = [
    {
        cod: '1',
        b: '1'
    },
    {
        cod: '2',
        b: '2'
    }
]
const b = [
    {
        cod: '1',
        b: '3'
    },
    {
        cod: '2',
        b: '5'
    }
]
const c = [
    {
        cod: '1',
        b: '4'
    }
]

a.filter(el => !b.map(m => m.cod).includes(el.cod))

