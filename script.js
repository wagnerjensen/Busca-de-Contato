
let p = document.querySelector("p")

let input = document.querySelector("input")

const contacts = [
    { name: "Wagner", number: "(19) 9 9999-9999" },
    { name: "Rosana", number: "(18) 9 9999-9999" },
    { name: "Bruna", number: "(17) 9 9999-9999" },
    { name: "Philipe", number: "(16) 9 9999-9999" },
    { name: "Raphael", number: "(15) 9 9999-9999" },

]

for (let i = 0; i < contacts.length; i++) {

}

function nome() {

    for (let i = 0; i < contacts.length; i++) {

        if (input.value.toLowerCase() === contacts[i].name.toLowerCase()) {

            p.innerHTML = `Contato encontrado: ${contacts[i].name}
                           ${contacts[i].number}`

            break
        } else{p.innerHTML = "Contato não localizado"

        }

    }
}