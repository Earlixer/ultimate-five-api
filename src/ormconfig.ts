// import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";

const config = {
    type: 'sqlite',
    database: 'earldb',
    entities: ['dist/src/**/*.entity.js'],
    synchronize: false,
    migrations: [
        'dist/src/db/migrations/*.js'
    ],
    cli: {
        migrationsDir: 'src/db/migrations'
    }

}

export default config;