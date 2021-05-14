$(document).ready(function(){

    var url = "https://randomuser.me/api/?results=5";
    var p ="";
    var radioValue;
    var selectedNationality;
    var loadMore;




    fetch(url)
        .then((response) => response.json())
        .then(function(data){
           url = "https://randomuser.me/api/?results=5&nat=AU&gender=male";
           fetchInformation(url);
        })

    $('#nationality').on('change', function() {
        var p = "";
        $("#result").empty();
        selectedNationality = $('#nationality :selected').text();
        url = "https://randomuser.me/api/?results=5&gender="+radioValue+"&nat=" + selectedNationality;
        fetchInformation(url);
    });
        


    $("input[type='radio']").click(function(){
        radioValue = $("input[name='gender']:checked").val();
        selectedNationality = $('#nationality :selected').text();
        $("#result").empty();
        url = "https://randomuser.me/api/?results=5&gender="+radioValue+"&nat=" + selectedNationality;
        if(radioValue){
            fetchInformation(url);
        }
    });



    function fetchInformation(url){
        fetch(url)
        .then((response) => response.json())
        .then(function(data){

           data.results.forEach(person => {

               p = `<div class="well">
               <img src="${person.picture.medium}" class="img-rounded" alt="Cinque Terre">
               <span style="margin-left:25px;">${person.name.title}  ${person.name.first} ${person.name.last}</span>
               <span>(${person.nat})</span>
               <span style="margin-left:350px;">Email: ${person.email}</span><br>
           <div>

<div style="margin-top:0px; 
width:250px; 
height:100px;
background-color:#FFFFFF;
display:inline-block;">      
  <h5><b>Starters Item:</b></h5>
  
  <input name="product" value="10" type="checkbox" id="p1" onclick="totalIt()" /> Seafood Feuilletes(10$)
  <br>
  <input name="product" value="20" type="checkbox" id="p2" onclick="totalIt()" /> Devilled Crab in Filo Tarts(20$)
  <br>
  <input name="product" value="30" type="checkbox" id="p3" onclick="totalIt()" /> Tofu Asparagus Stir Fry(veg)(30$)
  
 </div>

<div style="margin-top:0px; 
width:250px; 
height:100px;
background-color:#FFFFFF;
display:inline-block;">      
  <h5><b>Main Courses:</b></h5>
  
  <input name="product" value="10" type="checkbox" id="p4" onclick="totalIt()" /> Pork Filet in Marsala(10$)
  <br>
  <input name="product" value="20" type="checkbox" id="p5" onclick="totalIt()" /> Salmon with Basil Oil(20$)
  <br>
  <input name="product" value="30" type="checkbox" id="p6" onclick="totalIt()" /> Courgette Feta Filo pie(veg)(30$

 </div>

<div style="margin-top:0px; 
width:250px; 
height:100px;
background-color:#FFFFFF;
display:inline-block;">      
 <h5><b>Desserts:</b></h5>
  
  <input name="product" value="10" type="checkbox" id="p7" onclick="totalIt()" /> Praline Parfait(10$)
  <br>
  <input name="product" value="20" type="checkbox" id="p8" onclick="totalIt()" /> Hazelnut Meringues(20$)
  <br>
  <input name="product" value="30" type="checkbox" id="p9" onclick="totalIt()" /> Lemon Tart(veg)(30$)

 </div>

<div style="margin-top:0px; 
width:250px; 
height:100px;
background-color:#FFFFFF;
display:inline-block;">      
  <h5><b>Drinks:</b></h5>
  
  <input name="product" value="10" type="checkbox" id="p10" onclick="totalIt()" /> Irish Whiskey(10$)
  <br>
  <input name="product" value="20" type="checkbox" id="p11" onclick="totalIt()" /> Bulmers Cider(20$)
  <br>
  <input name="product" value="30" type="checkbox" id="p12" onclick="totalIt()" /> Poitín(Veg)(30$)
 
 </div>

              


               </div>`;
               console.log(p);
               $("#result").append(p);
               
           }); 

          loadMore = '<button id="loadmore" class="btn btn-primary">Load More</button>';

          $("#result").append(loadMore);

          $('#loadmore').on('click', function() {
            fetchInformation(url);
            $(this).remove();
          });
        
           
        })
    }




});