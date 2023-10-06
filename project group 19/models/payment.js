import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import Pengiriman from "./pengiriman.js"; 

const Payment = sequelize.define("Payment", {
    id_payment: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
        allowNull: false,
    },
    tipe_payment: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100],
        },
    },
    status_payment: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
});

// Menghubungkan Payment dengan Pengiriman menggunakan relasi
Payment.belongsTo(Pengiriman, { foreignKey: 'resi' });

export default Payment;