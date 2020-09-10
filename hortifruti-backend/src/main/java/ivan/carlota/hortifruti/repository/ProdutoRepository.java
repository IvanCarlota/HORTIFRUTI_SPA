package ivan.carlota.hortifruti.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ivan.carlota.hortifruti.model.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long>{

	public List<Produto> findAllByNomeContainingIgnoreCase(String nome);
	
}
