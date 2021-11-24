import React from 'react';
import { Button } from 'reactstrap';
import './search-panel'
const SearchPanel = () => {
    return(

        <div className="container">
                <form className="bottom-panel d-flex mb-5">
                    <input 
                        type="text"   
                        className="d-flex  form-control search-input me-1"
                        placeholder="Поиск записей"
                    />
                    <div class="btn-group">
                        <Button color="info">Danger!</Button>
                        <a href="#" class="btn btn-primary active" aria-current="page">Все</a>
                        <a href="#" class="btn btn-outline-success">Понравившиеся</a>
                    </div>
        
                </form>
        </div>
        

    )
}

export default SearchPanel;