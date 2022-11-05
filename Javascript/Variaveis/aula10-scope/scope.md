# Scope

* Escopo determina a visibilidade de alguma variavel no JS

# Block Statement

```js
// Iniciar um bloco

{
    //dentro do bloco, posso colocar qualquer codigo
}
```

O bloco tambem criara um novo escopo. Chamamos de `block-scoped`

## var

```js
//var e global e podera funcionar fora de um escopo de bloco

console.log('> existe x antes do bloco?', x)

{
    var x = 0
}

console.log('> existe x depois do bloco?', x)
```

## let e const

```js
//let e local, nao pode ser acessada fora do escopo, somente visivel no mesmo escopo de codigo
//let y = 1 -> atribui o valor
console.log('> existe y antes do bloco?', y)

{
    // y = 0 -> atualiza o valor, como nao tem palabra reservada, somente atualiza e nao cria outra variavel
    let y = 0
    console.log('> Existe y?', y)
}

console.log('> Existe y depois do bloco?', y)
```