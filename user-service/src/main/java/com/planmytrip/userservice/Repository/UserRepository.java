package com.planmytrip.userservice.Repository;

<<<<<<< HEAD
import java.util.List;
import java.util.Optional;

=======
>>>>>>> 089c3f8e9ca150b32ba7bca8f1d7b23b5ffe5b6a
import org.springframework.data.jpa.repository.JpaRepository;

import com.planmytrip.userservice.Entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
<<<<<<< HEAD

	 boolean existsByEmail(String email);

	 Optional<User> findByEmail(String email);
	 
	 
	 
=======
>>>>>>> 089c3f8e9ca150b32ba7bca8f1d7b23b5ffe5b6a
}