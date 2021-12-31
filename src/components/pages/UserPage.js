import React from 'react'
import { Link } from 'react-router-dom';

class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '', inputText: '', mode: 'view' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleChange(e) {
        this.setState({ inputText: e.target.value });
    }

    handleSave() {
        this.setState({ text: this.state.inputText, mode: 'view' });
    }

    handleEdit() {
        this.setState({ mode: 'edit' });
    }

    render() {
        if (this.state.mode === 'view') {
            return (
                <div className="container">
                    <div class="row mb-3">
                        <label for="inputEmail" class="col-sm-2 col-form-label">Username:</label>
                        <div class="col-sm-4">
                            <label for="inputEmail" class="col-sm-2 col-form-label">DummyName</label>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Password:</label>
                        <div class="col-sm-3" type="password">
                            {this.state.text}
                            {/* <input type="password" class="form-control" id="inputPassword" placeholder="Password" required /> */}
                        </div>
                    </div>

                    <div className='container mt-5'>
                        <button className='btn btn-outline-dark m-5' onClick={this.handleEdit} >Change Password</button>
                        {/* <Link className='btn btn-outline-dark mt-5 m-3'  >Change Password</Link> */}
                        <Link className='btn btn-outline-dark' to="/loginPage" >Logout</Link>
                    </div>

                </div>
            );
        } else {
            return (
                <>
                    <div className='container '>
                        <div class="col-md-8 mb-3 ">
                            <label class="col-sm-2 mt-5 col-form-label">New Password: {this.state.text}</label>
                            <input onChange={this.handleChange} type="password" placeholder="password here..." class=" col-sm-4" value={this.state.inputText} />
                        </div>
                    </div>

                    <div className='container mt-5'>

                        <button className='btn btn-outline-dark m-5' onClick={this.handleSave}> Save Password</button>
                    </div>
                </>

            );
        }
    }
}


export default UserPage








// const UserPage = () => {
//     return (

//         <div class="m-4">
//             <form action="/examples/actions/confirmation.php" method="post">
//                 <div class="row mb-3">
//                     <label for="inputEmail" class="col-sm-2 col-form-label">Username:</label>
//                     <div class="col-sm-4">
//                         <label for="inputEmail" class="col-sm-2 col-form-label">DummyName</label>
//                         {/* <input type="email" class="form-control" id="inputEmail" placeholder="Email" required> */}
//                     </div>
//                 </div>
//                 <div class="row mb-3">
//                     <label for="inputPassword" class="col-sm-2 col-form-label">Password:</label>
//                     <div class="col-sm-3">
//                         <input type="password" class="form-control" id="inputPassword" placeholder="Password" required />
//                     </div>
//                 </div>
//             </form>
//             <div className='mt-5'>
//             <Link className='btn btn-outline-dark mt-5 m-3'  >Change Password</Link>
//             <Link className='btn btn-outline-dark mt-5 m-3' to="/loginPage" >Logout</Link>
//             </div>
//         </div>
//     )

// }

// export default UserPage;

