function getSuma(req, res){
    const nums = [
        {id: 1, valor: 3},
        {id: 2, valor: 1},
    ];
    const result = nums[0].valor + nums[1].valor;
    return res.send(`Resultado: ${result}`);
}


export { getSuma };