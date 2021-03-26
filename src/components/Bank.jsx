 import './Bank.css';

const Info = ({ title, subtitle }) => <div className='info'>
    <p>{title}</p>
    <span>{subtitle}</span>
</div>

export const Bank = ({ selectedIndex, image, name, interest, monthly, final, onClick , total }) =>
    <div className='bank '>
    <input type="checkbox" id={name} name="check" value="1" checked={selectedIndex !== -1} />
    <p className='NumiricalBank'>{selectedIndex === -1 ? undefined : selectedIndex + 1}</p>
    <label className='row' for={name} onClick={onClick} >
        <div className='col-md-3 img-container'>
            <img className='align-middle bank-img' src={`./images/${image}`} />
        </div>
        <div className='col-md-8 description'> 
            <div class="row">
                <div className='col-12'>
                <h3 className="bank-name">{name}</h3>
                </div>
                <div className='col-12 d-flex justify-content-between currency '>

                    <div className="rate-info">
                        <Info  title={interest +"%"} subtitle=''/> 
                        <span className="rate-info" >Interest rate</span>
                    </div>

                    <div className="rate-info">
                        <Info  title={"SR " +monthly} subtitle=''/>
                        <span className="rate-info">Monthly Payment</span>
                    </div>

                    <div className="rate-info">
                        <Info  title={"SR " + final} subtitle=''/> 
                        <span className="rate-info">Final Payment</span>
                    </div>
                    <div className="rate-info">
                        <Info  title={"SR " + total} subtitle=''/> 
                        <span className="rate-info">Down Payment</span>
                    </div>
                
                </div>
            </div>
            
        </div>
    </label>
    
</div>
