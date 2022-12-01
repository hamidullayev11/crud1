var Create = {
    template:  `
    <div class="form">
    <h1 class=h1>  </h1>
        <div class="input-group ">
            <span class="input-group-text" id="addon-wrapping">@</span>
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" v-model="title">
        </div>

        <div class="form-floating">
        <textarea class="form-control"    placeholder="Leave a comment here" id="floatingTextarea"   v-model="info"></textarea>
        <label for="floatingTextarea">Comments</label>
    </div>
        
    <div class="mb-3">
       
        <input class="form-control" type="file" id="formFile"  @change="selectFile($event)">
  </div>


  <button type="button" class="btn btn-success"  @click="send">Send</button>

  
   </div>`,
   data() {
    return {
        title: "",
        info: "",
        image: null,
    }
   },
   methods: {
    selectFile(event){
        this.image =event.target.files[0];
       
    },
    send() {

        
        var form = new FormData();
        form.append('title', this.title)
        form.append('info', this.info)
        form.append('image', this.image)
       fetch('https://getty.uz/store-post',  {
        method: 'post',
        body: form
       })
       .then(response => response.json())
       .then(result => {
        console.log(result);
         var data=result.data;
        
        alert(data)
       })
    }
   }
}