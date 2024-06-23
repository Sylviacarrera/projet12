class Performance {
    /**
     * Creates a performance instance.
     * @param   {Object}     data                            The data object fetched from API.
     * @param   {!Number}    data.userId                     The user's id.
     * @param   {Object}     data.kind                       The mapping of performance kinds.
     * @param   {Array}      data.data                       The performance data array.
     */
    constructor(data) {
        this.userId = data.userId;
  
        // Mapping des clés en anglais aux valeurs en français
        const kindMapping = {
            cardio: 'Cardio',
            energy: 'Énergie',
            endurance: 'Endurance',
            strength: 'Force',
            speed: 'Vitesse',
            intensity: 'Intensité'
        };
  
        // Appliquer le mapping et trier les données
        this.data = data.data.map(item => ({
            value: item.value,
            kind: kindMapping[data.kind[item.kind]],
        }));
  
        this.data.sort((a, b) => {
            const order = ['Intensité', 'Vitesse', 'Force', 'Endurance', 'Énergie', 'Cardio'];
            return order.indexOf(a.kind) - order.indexOf(b.kind);
        });
    }
  }
  
  export default Performance;
  