
const emailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

export function validateForm(name, value){
    switch (name){
        case 'firstName':
            if(!value || value.trim() === ''){
                return 'Lütfen Ad alanını boş bırakmayınız.';
            }
            return '';
        case 'lastName':
            if(!value || value.trim() === ''){
                return 'Lütfen Soyad alanını boş bırakmayınız.';
            }
            return '';
        case 'email':
            if (!value){
                return 'Lütfen Email alanını boş bırakmayınız.'
            }else if (!emailRegex.test(value)){
                return 'Lütfen geçerli bir email adresi giriniz.';
            }
            return '';
        case 'password':
            if (!value){
                return 'Lütfen Parola alanını boş bırakmayınız.'
            }
            return '';
        default:
            return '';
    }
}