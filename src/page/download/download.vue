 <template>
  <div>
      
      <div class="hello">
      <router-link to="/MY"><i class="el-icon-arrow-left"></i></router-link>
      <span class="span">下载</span>
     
    
      </div>
        <section>
           <div class="center">
               <img src='../../images/elmlogo.jpeg' >
               <p>下载饿了么APP</p>
               <button>下载</button>
           </div> 
            <!-- <button>下载饿了么APP</button>
            <div class="determine" >下载</div> -->
        </section>
    </div>
</template>

<script>

    export default {
        name:"download",
    
    }
</script>
  
<style scoped>
*{
    margin: 0;
    padding: 0;
}
.hello{
    background: blue;
    text-align: center;
    /* height: 2rem; */
    width: 100%;
    /* border: 5px solid black; */
    position: fixed;
}
.el-icon-arrow-left{
    color: white; 
    font-size: 0.3rem;
    float: left;
    margin-top: 0.01rem;

}
span {
    color: white;
    font-size: 0.3rem;

} 
p{
    font-size: 0.3rem;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
}
.center{
    text-align: center;
    padding-top: 1rem;
}
button{
    color: white;
    background: springgreen;
    border:none;
    width: 3rem;
    height: 1rem;
    font-size: 0.5rem;
}

</style>
