const sequelize = require("../../config/database.js")
const { DataTypes } = require("sequelize")

const Movie = sequelize.define("Movie", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
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
        allowNull: false
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

/*
Session.hasMany(Seat, {onDelete: "CASCADE", foreignKey: "time"})
Seat.belongsTo(Session)
*/

module.exports = {
    Movie,
    Session,
    Seat,
    User
}