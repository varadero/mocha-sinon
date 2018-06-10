export class HelloWorld {
    public helloWorld(): string {
        return 'Hello World';
    }

    public async asyncFunc(): Promise<string> {
        const result = await Promise.resolve('value');
        return result;
    }

    public spiedOn(): string {
        return this.notCovered('test2');
    }

    public notCovered(arg: string): string {
        return 'This function is not covered by unit tests';
    }
}

export default HelloWorld;