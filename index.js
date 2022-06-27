const redirect = (url) => window.open(url, '_blank');
const $form = document.querySelector('form');
const $mailto =document.querySelector('#mailto') 

$form.addEventListener('submit',handleSubmit)
function handleSubmit(event){
    event.preventDefault();
    const form = new FormData(this)
    console.log(form.get('name'))
    $mailto.setAttribute('href',`mailto:joaflores899@gmail.com?subject=
    ${form.get('name')}
    ${form.get('email')}
    &body=${form.get('message')}
    
    `)
    $mailto.click()
    
}
