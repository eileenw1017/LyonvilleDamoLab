var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
const endpointUrl = 'https://lyonville-url.com';
/**
 * The function fetchHomeData uses axios to make an asynchronous GET request to
 * the endpoint url and returns the response data.
 * @returns The function `fetchData` is returning the `data` property from the
 * response of the GET request to 'endpointUrl'.
 */
export const fetchData = (page) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield axios.get(`${endpointUrl}/${page}`);
    return data;
});
