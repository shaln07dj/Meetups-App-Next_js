import NewMeetupFrom from '../../components/meetups/NewMeetupForm'

function NewMeetupPage(){
   const  addMeetupHandler=(enteredMeetupData)=>{
console.log(enteredMeetupData)
    }

    return <NewMeetupFrom onAddMeetup={addMeetupHandler}/>
}

export default NewMeetupPage;