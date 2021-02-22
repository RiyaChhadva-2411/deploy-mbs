import axios from "axios";

export const getForumData = async () => {
 
  return await axios
  .get('https://nimaaaa-project.herokuapp.com/mbs',{
    keyword: ""
  })
  .then((response)=> {
    //console.log(response.data)
    return response;
  })
  .catch((error)=> {
    console.log(error);
});
};

