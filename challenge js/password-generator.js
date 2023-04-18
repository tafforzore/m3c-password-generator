maj = document.querySelector('.Majuscule')
min = document.querySelector('.Minuscules')
num = document.querySelector('.Numeriques')
spe = document.querySelector('.speciaux')
txt = document.querySelector('.texte')
gen = document.querySelector('.generate')
inf = document.querySelector('.text-password')


gen.addEventListener('click', function(e){
	if((txt.value<8)||(txt.value>128)){
		inf.innerHTML = 'la taille mots de passe doit etre compris entre [8-128]'
	}
	else{
		inf.innerHTML = ''
		let number = []
			if (min.checked == true){
				let MIN =function(){ let a =String.fromCharCode(97 + Math.floor(Math.random()*26)); return a} 
				number.push(MIN)
			}
			if (maj.checked == true){
				let MAJ =function(){ let a = String.fromCharCode(65 + Math.floor(Math.random()*26)); return a}
				number.push(MAJ)
			}
			if (num.checked == true){
				let NUM =function(){ let a = Math.floor(Math.random()*10); return a}
				number.push(NUM)
			}
			if (spe.checked == true){
				let SPE = function(){ let a =String.fromCharCode(32 + Math.floor(Math.random()*31)) ; return a}
				number.push(SPE)
			}
		for(let i=0; i<=txt.value-1; i++){			
			let count 
			count =  Math.random()*(number.length)
			inf.innerHTML = inf.textContent+number[Math.floor(count)]()
		}
	}
})


