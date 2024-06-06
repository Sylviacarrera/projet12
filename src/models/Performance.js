
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
      this.kind = {
        1: 'Intensité',
        2: 'Vitesse',
        3: 'Force',
        4: 'Endurance',
        5: 'Énergie',
        6: 'Cardio',
      };
      this.data = data.data.map(item => ({
        value: item.value,
        kind: this.kind[item.kind],
      }));
      this.data.sort((a, b) => {
        const order = ['Intensité', 'Vitesse', 'Force', 'Endurance', 'Énergie', 'Cardio'];
        return order.indexOf(a.kind) - order.indexOf(b.kind);
      });
    }
  }
  
  export default Performance ;