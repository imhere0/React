import React ,{useState} from 'react';

const initialValues = {
    name:"",
    email:""

};

const Listing = () => {
    const [values, setValues] = useState(initialValues);
    const handleInputChange = (e) =>{
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]:value,
        });
    };
    const handleButtonClicked = (e) =>{
        axios({
            method: 'post',
            url: '/login',
            data: {
              name: values.name,
              email:values.email
            }
          });
    }
    return (
        <div class = "container">
            <div>
                <form>
                    
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input  class="form-control" name = "name" value = {values.name} onChange={handleInputChange}  placeholder="Enter your name"/>
                        {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    <div class="form-group">
                        <label for="inputNumber">Email</label>
                        <input  class="form-control" name ="email" value = {values.email} onChange = {handleInputChange} placeholder="Enter your email"/>
                    </div>
                    
                    <button type="submit" class="btn btn-primary" onClick = {handleButtonClicked}>Search</button>
                </form>
                
            </div>
        </div>    
    )
}

export default Listing


