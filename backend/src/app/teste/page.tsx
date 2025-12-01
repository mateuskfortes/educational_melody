export default function TestePage() {
    const variable = 'bananana'
    const lista = ['a', 'b', 'c']
    return (
        <>
            <div>Teste Page</div>
            <div>Teste Page</div>
            <div>{variable}</div>
            {lista.map(item => <div key={item}>{item}</div>)}
        </>
    );
}