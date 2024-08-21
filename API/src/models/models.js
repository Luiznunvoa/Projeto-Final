const sequelize = require("../../config/database.js")
const { DataTypes } = require("sequelize")
const { v4: uuidv4 } = require("uuid")

const Movie = sequelize.define("Movie", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    imageURL: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    synopse: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ageRating: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    director: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

const Session = sequelize.define("Session", {
    SessionId: {
        type: DataTypes.UUIDV4,
        defaultValue: () => uuidv4(),
        primaryKey: true
    },
    time: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    neighborhood: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

const Seat = sequelize.define("Seat", {
    SeatId: {
        type: DataTypes.UUIDV4,
        defaultValue: () => uuidv4(),
        primaryKey: true
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    row: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    ocupierCPF: {
        type: DataTypes.STRING
    },
    ocupierName: {
        type: DataTypes.STRING
    }
})

const User = sequelize.define("User", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    cpf: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    birthday: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    }, 
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

Movie.hasMany(Session, {onDelete: "CASCADE", foreignKey: "title"})
Session.belongsTo(Movie)


Session.hasMany(Seat, {onDelete: "CASCADE", foreignKey: "SessionId"})
Seat.belongsTo(Session, { foreignKey: "SessionId" });


module.exports = {
    Movie,
    Session,
    Seat,
    User
}