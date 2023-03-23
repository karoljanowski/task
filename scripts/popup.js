export function popup(form, element) {
    form.addEventListener('submit', function (e) {
        e.preventDefault()
        const {
            name,
            mail,
            phone,
            city,
            accept
        } = e.target
        const formElements = [name, mail, phone, city, accept]

        let hasError = validate(formElements)

        if (!hasError) {
            element.style.display = 'flex'
            document.querySelector('.popup__name').textContent = name.value
            document.querySelector('.popup__city').textContent = city.value
            document.querySelector('.popup__mail').textContent = mail.value
            form.reset()
        }
        document.querySelector('.popup__button').addEventListener('click', function () {
            element.style.display = 'none'

        })






    })
}

function validate(formElements) {
    let hasError = false
    formElements.forEach(element => {
        if (element.type == 'checkbox') {
            if (!element.checked) {
                console.log(element.classList)
                document.querySelector('.aside__label').classList.add('aside__error-checkbox')
                hasError = true
            } else {
                document.querySelector('.aside__label').classList.remove('aside__error-checkbox')
            }
        } else {
            if (!element.value) {
                element.classList.add('aside__error-input')
                hasError = true
            } else {
                element.classList.remove('aside__error-input')
            }
        }
    })
    return hasError
}