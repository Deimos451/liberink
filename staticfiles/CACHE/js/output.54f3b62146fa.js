function dropdown(event){dropdown_target=event.target.parentNode.parentNode.getElementsByClassName("dropdown-content");for(let i=0;i<dropdown_target.length;i++){console.log(dropdown_target[i]);console.log(dropdown_target[i].classList.contains('show'));if(dropdown_target[i].classList.contains('show')){dropdown_target[i].classList.remove('show');}
else{dropdown_target[i].classList.add('show');}}}
function hide_dropdown(event){window.onclick=function(event){if(!event.target.matches('.logo')){if(dropdown_target.length==1){if(dropdown_target[0].classList.contains('show')){dropdown_target[0].classList.remove('show');}}}}};window.axios.defaults.headers.common={'X-Requested-With':'XMLHttpRequest','X-CSRF-TOKEN':'{{ csrf_token}}'};window.axios.defaults.xsrfCookieName='csrftoken';window.axios.defaults.xsrfHeaderName="X-CSRFTOKEN";;function edit_list_title(event){event.target.style.cursor='text';var lists=document.getElementsByClassName("list_title");for(var i=0;i<lists.length;i++){var openlist=lists[i];if(openlist==event.target){var edit_list_title=event.target;event.target.removeAttribute('readonly');var list_index=i;var submit_listener=function(e){if(edit_list_title.value.length==0){return;}else if(e.which==13){edit_list_title.removeEventListener('keydown',submit_listener,false);e.preventDefault();edit_list_title.classList.remove('show_edit');edit_list_title.setAttribute('readonly','');edit_list_title.style.cursor='pointer';list_titile_update(event.target,list_index);}}
var hide_edit_listener=function(e){if(e.target!=edit_list_title){edit_list_title.removeEventListener('keydown',submit_listener,false);document.removeEventListener('click',submit_listener,false);edit_list_title.classList.remove('show_edit');edit_list_title.setAttribute('readonly','');edit_list_title.style.cursor='pointer';document.onmousedown=null;}}
event.target.addEventListener('keydown',submit_listener,false);document.addEventListener('click',hide_edit_listener,false)
if(!openlist.classList.contains('show_edit')){event.target.select();openlist.classList.add('show_edit');}}else{openlist.classList.remove('show_edit');}}
async function list_titile_update(element,index){var url='api/'+document.URL.split('/')[4]+'/update_list_title';await axios({method:'PUT',url:url,data:{'key':api_key,'title':element.value,'list_id':index}}).then(function(response){console.log(response.data);}).catch(function(error){console.log(error)});}};