const btn = document.getElementById('btn');

btn.addEventListener('click', async function() {
    try {
        const module = await import('./module.js')
        console.log(module)
        module.gretting()
    }
    catch (error) {
        console.log(error);
        console.log('No encontre el module')
    }
})