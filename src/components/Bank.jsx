import './Bank.css';

const Info = ({ title, subtitle }) => <div className='info'>
    <p>{title}</p>
    <span>{subtitle}</span>
</div>

export const Bank = ({ selectedIndex, image, name, interest, monthly, final, onClick  }) =>
    <div className='bank'>
    <input type="checkbox" id={name} name="check" value="1" checked={selectedIndex !== -1} />
    <p className='NumiricalBank'>{selectedIndex === -1 ? undefined : selectedIndex + 1}</p>
    <label className='row' for={name} onClick={onClick} >
        <div className='col-md-3 img-container'>
            <img className='align-middle' src={`./images/${image}`} />
        </div>
        <div className='col-md-8 description'> 
            <div class="row">
                <div className='col-12'>
                <h3>{name}</h3>
                </div>
                <div className='col-12 d-flex justify-content-between'>
                <Info className='' title={interest} subtitle='Interest rate'/>
                <Info className='' title={monthly} subtitle='Monthly Payment'/>
                <Info className=''title={final} subtitle='Final Payment'/>
                </div>
            </div>
            
        </div>
    </label>
</div>