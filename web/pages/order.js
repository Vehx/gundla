import { Layout } from "../components/layout";
import { ContactForm } from "../components/contactForm";

const Order = (props) => {
  return (
    <Layout>
      <h1>Detta är ordersidan</h1>
      <ContactForm/>
    </Layout>
  );
};

export default Order;
