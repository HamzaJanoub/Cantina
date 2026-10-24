const rem =document.getElementById('pop-up')
document.getElementById('pop-up-chow').addEventListener('click' , function(){
rem.classList.remove('hidden')
})

const ad =document.getElementById('pop-up')
document.getElementById('get-out-btn').addEventListener('click' , function(){
ad.classList.add('hidden')
})

const addBoton =document.getElementById('add-btn')

const lazone =document.getElementById('recettes-container')
  
addBoton.addEventListener("click", event =>{
    event.preventDefault();
    
    
const nomRecette =document.getElementById('nom-recette').value
const catégorieRecette =document.getElementById('categorie-recette').value
const priceRecette =document.getElementById('prix-recette').value
const typeRecette =document.getElementById('type-recette').value

    const card = document.createElement('div')

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
    const nom=document.createElement('b')
    nom.innerHTML= 'Nom De Recette :' + nomRecette;
    const catego=document.createElement('p')
    catego.textContent= 'Catégorie :' + catégorieRecette;
    const prix=document.createElement('p')
    prix.textContent='Prix :' + priceRecette;
    const type=document.createElement('p')
    type.textContent='Type :' + typeRecette;
    card.append(nom,catego,prix,type)
    lazone.append(card)
    
    rem.classList.add('hidden');


    document.getElementById('nom-recette').value = '';
    document.getElementById('categorie-recette').value = '';
    document.getElementById('prix-recette').value = '';
    document.getElementById('type-recette').value = '';
});














































