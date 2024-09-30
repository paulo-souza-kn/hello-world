const TemplateExpressions = () => {
    const name = 'Paulo'
    const data = {
        age: 32,
        Job: "Programmer"
    }
    return (
        <div>
            <h1>Meu nome é {name}</h1>
            <p>Voce atua como: {data.Job}</p>
        </div>
    );
};

export default TemplateExpressions;