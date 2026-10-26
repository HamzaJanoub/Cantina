const rem = document.getElementById('pop-up');

document.getElementById('pop-up-chow').addEventListener('click', function () {
    rem.classList.remove('hidden');
});

document.getElementById('get-out-btn').addEventListener('click', function () {
    rem.classList.add('hidden');
});

const addBoton = document.getElementById('add-btn');
const lazone = document.getElementById('recettes-container');

let cardToEdit ="";

addBoton.addEventListener('click', event => {
    event.preventDefault();

    const nomRecette = document.getElementById('nom-recette').value.trim();
    const catégorieRecette = document.getElementById('categorie-recette').value;
    const priceRecette = document.getElementById('prix-recette').value;
    const typeRecette = document.getElementById('type-recette').value;

    if (nomRecette.length < 4 || nomRecette.length > 30) {
        alert('Entrer un nom entre 4 et 30 caractères');
        return;
    }

    if (priceRecette < 5 || priceRecette > 50 || priceRecette === '') {
        alert('Entrer un prix entre 5 et 50 DH');
        return;
    }


    if (cardToEdit) {
        cardToEdit.querySelector('b').textContent =
            'Nom De Recette : ' + nomRecette;

        const paragraphs = cardToEdit.querySelectorAll('p');

        paragraphs[0].textContent = 'Catégorie : ' + catégorieRecette;
        paragraphs[1].textContent = 'Prix : ' + priceRecette + ' DH';
        paragraphs[2].textContent = 'Type : ' + typeRecette;

        cardToEdit = null;
        rem.classList.add('hidden');

        document.getElementById('nom-recette').value = '';
        document.getElementById('categorie-recette').value = '';
        document.getElementById('prix-recette').value = '';
        document.getElementById('type-recette').value = '';

        return;
    }

   
    const card = document.createElement('div');

    card.classList.add(
        'min-h-36',
        'w-full',
        'max-w-sm',
        'rounded-lg',
        'border',
        'border-slate-200',
        'bg-slate-50',
        'p-5',
        'shadow-sm',
        'hover:shadow-md',
        'hover:border-emerald-300'
    );

    const nom = document.createElement('b');
    nom.textContent = 'Nom De Recette : ' + nomRecette;

    const catego = document.createElement('p');
    catego.textContent = 'Catégorie : ' + catégorieRecette;

    const prix = document.createElement('p');
    prix.textContent = 'Prix : ' + priceRecette + ' DH';

    const type = document.createElement('p');
    type.textContent = 'Type : ' + typeRecette;

    card.append(nom, catego, prix, type);


    const editBtn = document.createElement('button');
    editBtn.textContent = 'Editer';

    editBtn.classList.add(
        'mt-3',
        'rounded-lg',
        'bg-blue-400',
        'px-4',
        'py-2',
        'text-white',
        'hover:bg-blue-200',
        'hover:text-blue-500',
        'border',
        'border-blue-500'
    );


    const deletButton = document.createElement('button');
    deletButton.textContent = 'Supprimer';

    deletButton.classList.add(
        'mt-3',
        'rounded-lg',
        'bg-red-400',
        'px-4',
        'py-2',
        'text-white',
        'hover:bg-red-200',
        'hover:text-red-500',
        'border',
        'border-red-500',
        'ml-4'
    );

    deletButton.addEventListener('click', () => {
        if (cardToEdit === card) {
            cardToEdit = "";
            rem.classList.add('hidden');
        }

        card.remove();
    });

    editBtn.addEventListener('click', () => {
        const paragraphs = card.querySelectorAll('p');

        document.getElementById('nom-recette').value =
            card.querySelector('b').textContent.replace('Nom De Recette : ', '');

        document.getElementById('categorie-recette').value =
            paragraphs[0].textContent.replace('Catégorie : ', '');

        document.getElementById('prix-recette').value =
            paragraphs[1].textContent.replace('Prix : ', '').replace(' DH', '');

        document.getElementById('type-recette').value =
            paragraphs[2].textContent.replace('Type : ', '');

        cardToEdit = card;
        rem.classList.remove('hidden');
    });

    card.append(editBtn, deletButton);
    lazone.append(card);

    allOptionSelect(nomRecette , catégorieRecette ,priceRecette)

    rem.classList.add('hidden');

    document.getElementById('nom-recette').value = '';
    document.getElementById('categorie-recette').value = '';
    document.getElementById('prix-recette').value = '';
    document.getElementById('type-recette').value = '';
});


