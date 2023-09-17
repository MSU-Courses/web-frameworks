<?php

// create db connection
$pdo = new PDO("sqlite:" . __DIR__ . "/data.db");

// create students table
$pdo->exec(
    ' CREATE TABLE IF NOT EXISTS student (
    idnp text primary key,
    name text not null,
    age integer not null
)');

// create contract table
$pdo->exec(
    'CREATE TABLE IF NOT EXISTS contract (
    id integer primary key,
    contract_sum integer not null,
    student_idnp text not null,
    foreign key (student_idnp) references student(idnp)
)');



$idnp = random_int(20040403903490, 20050403903490);


// try this to make good query without errors
add_student($idnp, 'Alexei Ivanov', 12, 10000);

// try this to make bad query
//add_student($idnp, 'Alexei Ivanov', 19, null);

function add_student($idnp, $name, $age, $contract_sum): void
{
    global $pdo;
    try {
        // BEGIN TRANSACTION
        $pdo->beginTransaction();

        // exec first query
        $sql = "INSERT into student (idnp, name, age) values (:idnp, :name, :age)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            'idnp' => $idnp,
            'name' => $name,
            'age' => $age,
        ]);

        // exec second query
        $sql = "INSERT into contract (contract_sum, student_idnp) values (:sum, :idnp)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            'sum' => $contract_sum,
            'idnp' => $idnp,
        ]);

        // END TRANSACTION
        // COMMIT OUR CHANGES
        $pdo->commit();

        echo "Student {$name} with idnp {$idnp} was successfully added to database!";
    } catch (PDOException $exception) {
        // if an error occurred, rollback our queries
        $pdo->rollBack();
        echo "[err] an error occurred: {$exception->getMessage()}";
    }
}
