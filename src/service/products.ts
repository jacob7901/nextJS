import path from 'path';
import { promises as fs } from 'fs';
// 순수 타입스크립트 로직만 있음. 
// 따라서 ts로 
// 함수를 호출하면 제품을 반환 
// getProducts()는 아무것도 전달받지 않고 promise를 리턴할꺼야 라고 명시

export type Product = {
    id: string;
    name: string;
    price: number;
}

export async function getProducts(): Promise<Product[]> {
    // for (let i = 0; i < 10000000000; i++) { }
    // 파일을 읽어올 수 있는 경로를 만들어 준다. 좀전에 최상위 data/products.json 을 만듬
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    // path를 import 하고 process.cwd() 는 현재 작업중인 디렉토리를 반환
    // 그 다음 data 폴더에 있는 products.json 을 가져온다.
    // 그다음에 filePath에 있는 파일을 읽어온다.
    // fs는 promiss 이기 때문에  function 앞에 async를 붙여준다.

    const data = await fs.readFile(filePath, 'utf-8');
    // 아래 return 은 필요가 없으니 지우고 아래에 return data를 넣어준다.
    return JSON.parse(data);

    // return ['shirt', 'pants', 'skirt', 'shoes', 'dress'];
}

// 사용자가 특정 경로로 갔을 때 그 slug 를 전달해 주면 객체를 반환
export async function getProduct(id: string): Promise<Product | undefined> {
    const products = await getProducts();
    return products.find((item) => item.id === id);
}