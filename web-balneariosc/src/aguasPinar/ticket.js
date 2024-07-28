import Footer from "../components/footer-component";
import NavBar from "../components/navBar-component";
import TicketBooking from "../components/ticket-component";



const TicketsSection= () => {
    return (
        <div>
            <NavBar/>
            <div>
                <TicketBooking/>
            </div>
           <Footer/>
        </div>
    )
}
export default TicketsSection;