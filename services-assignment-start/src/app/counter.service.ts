export class CounterService {
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    incrementActiveToInactive(){
        this.activeToInactiveCounter++;
        console.log('Active to inactive : '+this.activeToInactiveCounter);
    }
    incrementInactiveToActiveCounter(){
        this.inactiveToActiveCounter++;
        console.log('Inactive to Active : '+this.inactiveToActiveCounter);
    }
}
// this is injected to user service