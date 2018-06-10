export class HelloWorld {
    helloWorld(): string {
        return 'Hello World';
    }

    async asyncFunc(): Promise<string> {
        const result = await Promise.resolve('value');
        return result;
    }

    spiedOn(): string {
        return this.notCovered('test2');
    }

    notCovered(arg: string): string {
        return 'This function is not covered by unit tests';
    }

    async awaitWithTimeout<T>(fn: Function, timeout: number): Promise<T> {
        return new Promise<T>(async (resolve, reject) => {
            let timedOut = false;
            setTimeout(() => {
                timedOut = true;
                reject();
            }, timeout);
            const result = await fn();
            if (!timedOut) {
                resolve(result);
            }
        });
    }
}

export default HelloWorld;