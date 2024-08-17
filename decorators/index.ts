function Log() {
    return function (target, key, descriptor) {
      // Aqui guardamos o método original para chamá-lo manualmente
      const originalMethod = descriptor.value
  
          // Aqui estamos usando a técnica de desestruturar um array
          // de argumentos para repassar quaisquer que sejam os
          // argumentos originais
      descriptor.value = function (...args: any[]) {
        console.log('-------------------------------')
        console.log(`Chamando o método ${key} com os parâmatros: ${JSON.stringify(args)}`)
  
        const result = originalMethod.apply(this, args)
  
        console.log(`O método ${key} retornou o valor: ${JSON.stringify(result)}`)
        console.log('-------------------------------')
  
        return result
      }
    }
  }
