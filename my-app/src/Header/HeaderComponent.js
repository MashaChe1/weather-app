import FormComponent from './FormComponent';
import NavComponent from './NavComponent';

export default function HeaderComponent(props) {
   return (
      <>
         <NavComponent/>
         <FormComponent {...props}/>
      </>
   )
}