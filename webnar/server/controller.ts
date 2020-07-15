import model from './model';

class Controller{
	
	//select
	constructor(){}
	
	getJogadores(){
		return model.find({});
	}
	
	select(req,res){
		this.getJogadores()
		.then(jogadores => res.status(200).json({'result': jogadores}))
		.catch(err => res.status(400).json({'result': err}));
	}
	
	//selectOne
	getJogadoresById(id){
		return model.find(id);
	}
	
	selectOne(req,res){
		const id = {_id: req.params.id}
		
		this.getJogadoresById(id)
		.then(jogadores => res.status(200).json({'result': jogadores}))
		.catch(err => res.status(400).json({'result': err}));
	}
	
	//Delete 
	deleteById(id){
		return model.deleteOne(id);
	}
	
	delete(req,res){
		const id = {_id: req.params.id}
		
		this.deleteById(id)
		.then(jogadores => res.status(200).json({'result': jogadores}))
		.catch(err => res.status(400).json({'result': err}));
	}
	
	//Update 
	updateById(id, data){
		return model.findOneAndUpdate(id, data);
	}
	
	update(req,res){
		const id = {_id: req.params.id}
		const jogador = req.body;
		
		this.updateById(id, jogador)
		.then(jogadores => res.status(200).json({'result': jogadores}))
		.catch(err => res.status(400).json({'result': err}));
	}
	
	//insert 
	createJogador(data){
		return model.create(data);
	}
	
	insert(req,res){
		const jogador = req.body;
		
		this.createJogador(jogador)
		.then(jogadores => res.status(200).json({'result': jogadores}))
		.catch(err => res.status(400).json({'result': err}));
	}
	
}

export default Controller