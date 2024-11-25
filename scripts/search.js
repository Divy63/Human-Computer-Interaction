searchBar=document.getElementById('searchBar');
if(searchBar){
document.getElementById("result").style.display = "none"; 
searchBar.addEventListener('input',function(){
    //document.getElementById("result").style.display;
    const searchText=this.value.trim();
    const resultsDiv=document.getElementById('result');
    const searchButton=document.getElementById("searchButton");    
    resultsDiv.innerHTML='';//clear previous 
    let toys=new Toys();
    if(searchText.length>0){
        document.getElementById("result").style.display = "block";
        const results=TOY_DATABASE.searchToys(searchText);
        console.log(results);
        if(results.length>0){
            results.forEach(toy=>{
                console.log(toy);
                const toyResultDiv=document.createElement('div');
                toyResultDiv.className='result-item'
                toyResultDiv.textContent=`${toy.getName()} (Age:${toy.getAge()}+) Price: ${toy.getPrice()}`;

                searchButton.addEventListener('click',()=>{
                    toys=new Toys();
                    for(let i=0;i<results.length;i++){
                        toys.add(results[i]);
                    }
                    toys.displayHTML();
                    createCartListeners(toys);
                    let toyCardArea = document.getElementById("box-toy-card");
                    // Scrolls to toy card section
                    window.scrollTo({
                        top: toyCardArea.offsetTop,
                        behavior: "smooth",
                    });

                    resultsDiv.innerHTML='';
                    

                })
                toyResultDiv.addEventListener('click',()=>{
                    toys=new Toys();
                    toys.add(toy);
                    toys.displayHTML();
                    createCartListeners(toys);
                    let toyCardArea = document.getElementById("box-toy-card");
                    // Scrolls to toy card section
                    window.scrollTo({
                        top: toyCardArea.offsetTop,
                        behavior: "smooth",
                    });
                    resultsDiv.innerHTML='';
                    document.getElementById('searchBar').value=toy.getName();

                });

                resultsDiv.appendChild(toyResultDiv);
                console.log(resultsDiv);

            });
        }
    }else{
        const noResultDiv=document.createElement('div');
        noResultDiv.className='result-item'
        noResultDiv.textContent='No results found.';
        resultsDiv.appendChild(noResultDiv);
        document.getElementById("result").style.display = "none"; 
    }
    
});
}

