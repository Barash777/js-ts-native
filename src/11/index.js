console.log('promise')

function counter(c) {
    return new Promise((res) => {
        setTimeout(() => {
            res(c + 1)
        }, 1000)
    })
}

async function run() {
    let c = 0;
    c = await counter(c)
    console.log(c)
    c = await counter(c)
    console.log(c)
    c = await counter(c)
    console.log(c)
}

run()