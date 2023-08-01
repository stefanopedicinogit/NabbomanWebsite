import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ElegantButton = styled.button`
  background-color: white;
  color: black;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #f2f2f2;
  }
`;

const PageContainer = styled.div`
  background-color: #333;
  color: #fff;
  padding: 20px;
  padding-top: 150px;
  height: 90vh;
`;

const Success = styled.div`
    border-radius: 1em;
    padding: 1em;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    `;

const CheckoutCancelled = () => {
    const navigate = useNavigate();

    return (
        <PageContainer>
            <Success>
                <div className="text-center">
                <h1>Pagamento Rifiutato</h1>
                <p>Controllare estremi carta di credito</p>
                <ElegantButton onClick={()=> navigate('/store')}>Torna allo store</ElegantButton>
                </div>
        </Success>
    </PageContainer >
  );
}
export default CheckoutCancelled;