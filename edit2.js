var add = {
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
            id: null,
            title: "",
            info: "",
            image: null,
        }
   },
 
   mounted() {
    var form = new FormData()
    form.append('id', this.$route.params.raqam)
    fetch('https://getty.uz/get-post',{
        method: 'post',
        body: form
    })
    .then(response => response.json())
    .then(result => {
        console.log(result);
        this.title=result.data.title;
        this.info=result.data.info;
        this.image=result.data.image;
       
    })
   },

   methods: {
    selectFile(event){
        this.image =event.target.files[0];
       
    },
    send() {
        var form = new FormData();
        form.append('id', this.$route.params.raqam)
        form.append('title', this.title)
        form.append('info', this.info)
        form.append('image', this.image)
       fetch(' https://getty.uz/update-post',{
        method: 'post',
        body: form 
       })
       .then(response => response.json())
       .then(result => {
        console.log(result);
        this.title=result.data.title;
        this.info=result.data.info;
        this.image=result.data.image;

        var data= result.data;
        
        alert(data)
       })
    }
   }


}